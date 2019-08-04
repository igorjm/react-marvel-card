import React from 'react';
import { render, fireEvent, waitForElement, wait } from 'test-utils';
import axiosMock from 'axios';
import App from '../../App';

const character1 = {
  id: 1,
  name: 'Character 1',
  description: 'Mocked description',
  thumbnail: { path: 'mockImage' },
};

const serie1 = {
  id: 1,
  title: 'Serie 1',
  thumbnail: { path: 'mockImage' },
};

describe('<Character />', () => {
  afterEach(() => {
    axiosMock.get.mockReset();
  });

  it('should redirect to character`s screen and load data when clicking on its card', async () => {
    axiosMock.get
      .mockResolvedValueOnce({
        data: { data: { total: 1, results: [character1] } },
      })
      .mockResolvedValueOnce({
        data: { data: { results: [character1] } },
      })
      .mockResolvedValueOnce({
        data: { data: { results: [serie1] } },
      });

    const { getByTestId, queryByTestId, queryByText, debug } = render(<App />);

    await waitForElement(() => queryByText(character1.name));

    fireEvent.click(getByTestId('card'));

    expect(getByTestId('character-screen')).toBeInTheDocument();
    expect(queryByTestId('home-screen')).not.toBeInTheDocument();

    await wait(() =>
      expect(queryByTestId('loading-icon')).not.toBeInTheDocument()
    );

    expect(queryByText(character1.name)).toBeInTheDocument();
    expect(queryByText(character1.description)).toBeInTheDocument();
    expect(queryByText(serie1.title)).toBeInTheDocument();
  });

  it('should show the edit modal and edit the character`s data when filled the form', async () => {
    const labelName = /name/i;
    const labelDescription = /description/i;

    axiosMock.get
      .mockResolvedValueOnce({
        data: { data: { results: [character1] } },
      })
      .mockResolvedValueOnce({
        data: { data: { results: [] } },
      });

    const {
      getByTestId,
      queryByTestId,
      getByLabelText,
      getByText,
      debug,
    } = render(<App />, {
      route: `/character/${character1.id}`,
    });

    await wait(() =>
      expect(queryByTestId('loading-icon')).not.toBeInTheDocument()
    );

    fireEvent.click(getByText(/edit/i));

    expect(getByTestId('modal')).toBeInTheDocument();
    expect(getByLabelText(labelName).value).toBe(character1.name);
    expect(getByLabelText(labelDescription).value).toBe(character1.description);

    const nameValueInput = 'John Doe';
    fireEvent.change(getByLabelText(labelName), {
      target: { value: nameValueInput },
    });

    expect(getByLabelText(labelName).value).toBe(nameValueInput);

    const descriptionValueInput = 'Foo bar';
    fireEvent.change(getByLabelText(labelDescription), {
      target: { value: descriptionValueInput },
    });

    expect(getByLabelText(labelDescription).value).toBe(descriptionValueInput);

    fireEvent.click(getByText(/save/i));

    expect(getByText(nameValueInput)).toBeInTheDocument();
    expect(getByText(descriptionValueInput)).toBeInTheDocument();
  });
});
