import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// components
import Button from '../Button';
import Modal from '../Modal';
import EditCharacterModal from '../EditCharacterModal';
// css
import { media } from '../../css';

const Wrapper = styled.div`
  position: relative;
  width: 50%;
  margin-right: 0;

  &::before {
    content: '';
    display: block;
    padding-bottom: 150%;
    background-color: ${p => p.theme.colors.v3};
    border-radius: 4px;
  }

  ${media.xs`
    width: calc(100% / 3);
    margin-right: 26px;
  `};

  ${media.sm`
    width: calc(100% / 4);
    margin-right: 26px;
  `};

  ${media.md`
    width: calc(100% / 5);
    margin-right: 26px;
  `};
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  height: auto;
  border-radius: 4px;
`;

const Toolbar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 8px;
  background: rgba(0, 0, 0, 0.55);
  width: 100%;
  border-radius: 0 0 4px 4px;
`;

const Avatar = ({ imgSrc }) => (
  <Modal.Manager>
    {modal => (
      <React.Fragment>
        {modal.isOpen && <EditCharacterModal modal={modal} />}
        <Wrapper>
          <Img src={imgSrc} alt="Hero" />
          <Toolbar>
            <Button onClick={() => modal.showModal(true)}>Edit</Button>
          </Toolbar>
        </Wrapper>
      </React.Fragment>
    )}
  </Modal.Manager>
);

Avatar.propTypes = {
  imgSrc: PropTypes.string,
};

export default Avatar;
