import React from "react";
import PropTypes from "prop-types";

export const Modal = ({ show, onClose, onConfirm }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal" tabIndex="-1" style={{ display: "block" }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Confirm Delete</h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={onClose}
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure you want to delete this contact?</p>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={onClose}
                        >
                            X
                        </button>
                        <button
                            type="button"
                            onClick={onConfirm}
                            className="btn btn-primary"
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired
};
