import "./DeleteModal.scss";
import React from "react";
import Modal from "react-modal";
import cross from "../../assets/images/5.png";

Modal.setAppElement("#root");

const DeleteModal = ({ modalIsOpen, handleDelete, closeModal, text }) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Delete confirmation"
        className="delete-modal"
        overlayClassName="overlay"
      >
        <div className="modal-container">
          <img
            onClick={closeModal}
            src={cross}
            className="modal-container__close-icon"
            alt="close cross icon"
          />
          <h2 className="modal-container__title">Delete this {text} ?</h2>
          <p className="modal-container__text">
            Please confirm that you'd like to permanently delete your {text}.
            You won't be able to undo this action.
          </p>
          <div className="modal-container__buttons-container">
            <button onClick={closeModal} className="cancel-button">
              Cancel
            </button>
            <button className="delete-button" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteModal;
