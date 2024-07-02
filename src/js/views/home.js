import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { ContactCard } from "../component/contactCard.js";
import { Context } from "../store/appContext";

export const Home = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="text-center mt-5">
            {store.contacts.length === 0 ? (
                <p>No contacts found. Please add a contact.</p>
            ) : (
                store.contacts.map((item, index) => (
                    <ContactCard
                        key={index}
                        name={item.name}
                        address={item.address}
                        phone={item.phone}
                        email={item.email}
                        id= {item.id}
                        onDelete={() => actions.deleteContact(item.id)}
                        onUpdate={() => actions.updateContact(item)}
                    />
                ))
            )}
        </div>
    );
};