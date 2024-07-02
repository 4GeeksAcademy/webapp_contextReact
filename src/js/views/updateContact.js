import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";


export const UpDateContact = () => {
    const { store, actions } = useContext(Context);
    const [contact, setContact] = useState({

        name: store.contact.name,
        email: store.contact.email,
        phone: store.contact.phone,
        address: store.contact.address,
        id: store.contact.id
    });
   console.log(store.contact)

    const navigate = useNavigate();
    // const { id } = useParams(); // Obtener el ID del contacto desde los parámetros de la URL

    // useEffect(() => {
    //     const contactToUpdate = store.contacts.find((contact) => contact.id === parseInt(id));
    //     if (contactToUpdate) {
    //         setContact(contactToUpdate);
    //     }
    // }, [store.contacts, id]);

    const handleChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        actions.updateContact(contact)
            .then(() => {
                actions.getContacts(); // Refrescar la lista de contactos después de actualizar un contacto
                navigate("/");
            })
            .catch((error) => console.error("Error updating contact:", error));
    };

    return (
        <div className="container mt-5">
            <h1>Update contact</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={contact.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={contact.email}
                        onChange={handleChange}
                        placeholder="Enter email"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={contact.phone}
                        onChange={handleChange}
                        placeholder="Enter phone"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        name="address"
                        value={contact.address}
                        onChange={handleChange}
                        placeholder="Enter address"
                    />
                </div>
                <button type="submit" onClick={handleSubmit} className="btn btn-primary">Save</button>
                <a href="/" className="btn btn-link">Return to contacts</a>
            </form>
        </div>
    );
};
// export default UpDateContact