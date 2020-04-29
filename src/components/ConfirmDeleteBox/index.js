import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function ConfirmDeleteBox({ title, subtitle, onDelete, onCancel, isOpen }) {
  return (
    <Modal isOpen={isOpen}>
      {title && <ModalHeader>{title}</ModalHeader>}
      <ModalBody>{subtitle}</ModalBody>
      <ModalFooter>
        <button type="button" className="btn btn-link text-danger" onClick={onDelete}>
          ลบ
        </button>
        <button onClick={onCancel} type="button" className="btn btn-primary">
          ยกเลิก
        </button>
      </ModalFooter>
    </Modal>
  );
}

ConfirmDeleteBox.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

ConfirmDeleteBox.defaultProps = {
  title: '',
  subtitle: '',
};

export default ConfirmDeleteBox;
