import React, {useContext, useEffect, useState} from "react";
import PropTypes from 'prop-types';
import { ContactCard } from "../component/contactCard";

export const Contacts = () =>{
<div>
    <ContactCard 
    name="mi nombre"
    address="address"
    phone="phone"
    email="email"
    />
</div>
}
