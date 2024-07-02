import { useState, useContext } from "react";
import React from "react";
import PropTypes from "prop-types";
import { Modal } from "./modal";
import { useNavigate } from "react-router";
import { Context } from "../store/appContext";


export const ContactCard = props => {

const {actions} = useContext(Context)

    const navigate = useNavigate()
    
    const [showModal, setShowModal] = useState(false);

    const handleDelete = () => {
        setShowModal(true);
    };

    const handleConfirmDelete = () => {
        if (props.onDelete) {
            props.onDelete();
        }
        setShowModal(false);
    };

    

    return (
        <li className="list-group-item">
            <div className="row w-100">
                <div className="col-12 col-sm-6 col-md-3 px-0">
                    <img
                        src="https://animationfestival.no/2015/media/2019/09/01-Dan-Harmon-1.jpg"
                        alt="Contact"
                        className="rounded-circle mx-auto d-block img-fluid w-75 h-100"
                    />
                </div>
                <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                    <div className="float-right">
                        <button className="btn" onClick={()=>{
                            actions.saveContact(props);
                            navigate("/editForm")
                        }}>
                            <i className="fas fa-pencil-alt mr-3" />
                        </button>
                        <button className="btn" onClick={handleDelete}>
                            <i className="fas fa-trash-alt" />
                        </button>
                    </div>
                    <label className="name lead">{props.name}</label>
                    <br />
                    <i className="fas fa-map-marker-alt text-muted mr-3" />
                    <span className="text-muted">{props.address}</span>
                    <br />
                    <span className="fa fa-phone fa-fw text-muted mr-3" />
                    <span className="text-muted small">{props.phone}</span>
                    <br />
                    <span className="fa fa-envelope fa-fw text-muted mr-3" />
                    <span className="text-muted small text-truncate">{props.email}</span>
                </div>
            </div>

            <Modal show={showModal} onClose={() => setShowModal(false)} onConfirm={handleConfirmDelete} />
        </li>
    );
};

ContactCard.propTypes = {
    onDelete: PropTypes.func,
    onUpdate: PropTypes.func,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired
};

ContactCard.defaultProps = {
    onDelete: null,
    onUpdate: null
};
