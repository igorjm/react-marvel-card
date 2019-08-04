import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

// components
import Button from '../Button';
import Modal from '../Modal';
import Input from '../Input';
import FormGroup from '../FormGroup';
// redux
import { CHARACTER_EDIT_SUCCESS } from '../../redux/character';

const ModalHeader = styled.div`
  margin-bottom: 26px;
`;

const HeaderText = styled.span`
  color: ${p => p.theme.colors.v6};
`;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const ModalFooter = styled.div`
  display: flex;
`;

class EditCharacterModal extends React.Component {
  state = {
    name: '',
    description: '',
  };

  componentDidMount() {
    const { characterReducer } = this.props;

    this.setState({
      name: characterReducer.data.name,
      description: characterReducer.data.description,
    });
  }

  handleChangeInput = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  onSubmit = e => {
    const { name, description } = this.state;

    e.preventDefault();

    this.props.dispatch({
      type: CHARACTER_EDIT_SUCCESS,
      editedData: {
        name,
        description,
      },
    });

    this.props.modal.showModal(false);
  };

  render() {
    const { modal, characterReducer } = this.props;

    return (
      <Modal {...modal} data-testid="modal">
        <form onSubmit={this.onSubmit}>
          <ModalHeader>
            <h2>
              <HeaderText>Edit | </HeaderText>
              {characterReducer.data.name}
            </h2>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <label htmlFor="name">Name</label>
              <Input
                id="name"
                value={this.state.name}
                onChange={e => this.handleChangeInput('name', e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="description">Description</label>
              <Input
                id="description"
                as="textarea"
                value={this.state.description}
                onChange={e =>
                  this.handleChangeInput('description', e.target.value)
                }
              />
            </FormGroup>
            <ModalFooter>
              <Button type="submit" appearance="success" size="default">
                Save
              </Button>
              <Button
                type="button"
                appearance="ghost"
                size="default"
                onClick={() => modal.showModal(false)}
              >
                Cancel
              </Button>
            </ModalFooter>
          </ModalBody>
        </form>
      </Modal>
    );
  }
}

EditCharacterModal.propTypes = {
  modal: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  characterReducer: state.character,
});

export default withRouter(connect(mapStateToProps)(EditCharacterModal));
