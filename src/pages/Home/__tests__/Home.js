import React from 'react';
import { render, wait, fireEvent, waitForElement } from 'test-utils';
import axiosMock from 'axios';
import Home from '../Home';
import App from '../../App';

const character1 = {
  id: 1,
  name: 'Character 1',
  thumbnail: { path: 'mockImage' },
};

const character2 = {
  id: 2,
  name: 'Character 2',
  thumbnail: { path: 'mockImage' },
};

describe('<Home />', () => {
  afterEach(() => {
    axiosMock.get.mockReset();
  });

  it('should render no heroes found message when array is empty', async () => {
    axiosMock.get.mockResolvedValueOnce({
      data: { data: { total: 0, results: [] } },
    });

    const { getByText, debug } = render(<Home />);

    await wait(() => expect(getByText(/no heroes found/i)).toBeInTheDocument());

    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(getByText(/no heroes found/i)).toBeInTheDocument();
  });

  it('should load a list of characters', async () => {
    axiosMock.get.mockResolvedValueOnce({
      data: { data: { total: 2, results: [character1, character2] } },
    });

    const { queryByTestId, getByText, debug } = render(<Home />);

    await wait(() =>
      expect(queryByTestId('loading-icon')).not.toBeInTheDocument()
    );

    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(getByText(character1.name)).toBeInTheDocument();
    expect(getByText(character2.name)).toBeInTheDocument();
  });

  it('should search for heroes when typed something on search hero input', async () => {
    const loadingIconId = 'loading-icon';

    axiosMock.get
      .mockResolvedValueOnce({
        data: { data: { total: 1, results: [character1] } },
      })
      .mockResolvedValueOnce({
        data: { data: { total: 1, results: [character2] } },
      });

    const {
      queryByTestId,
      getByText,
      queryByText,
      getByPlaceholderText,
      debug,
    } = render(<Home />);

    await wait(() =>
      expect(queryByTestId(loadingIconId)).not.toBeInTheDocument()
    );

    expect(getByText(character1.name)).toBeInTheDocument();

    const inputValue = 'character';
    const searchInputPlaceholder = /search hero/i;
    fireEvent.change(getByPlaceholderText(searchInputPlaceholder), {
      target: { value: inputValue },
    });

    expect(getByPlaceholderText(searchInputPlaceholder).value).toBe(inputValue);

    await wait(() => expect(queryByText(character2.name)).toBeInTheDocument());

    expect(axiosMock.get).toHaveBeenCalledTimes(2);
    expect(queryByText(character1.name)).not.toBeInTheDocument();
    expect(queryByTestId(loadingIconId)).not.toBeInTheDocument();
  });
});
