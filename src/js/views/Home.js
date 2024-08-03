import React, { useState, useEffect } from "react";
import "../../styles/home.css";
import FotoAvatar from "../../img/FotoAvatar.png";

export const Home = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch("https://playground.4geeks.com/contact/agendas/Beka")
            .then(response => response.json())
            .then(data => setContacts(data.contacts));
    }, []);

    const borrarContacto = (id) => {
        const isConfirmed = window.confirm("¿Estás seguro de que quieres eliminar este contacto?");
        if (isConfirmed) {
            fetch(`https://playground.4geeks.com/contact/agendas/Beka/contacts/${id}`, {
                method: "DELETE",
            })
            .then(response => {
                if (response.ok) {
                    setContacts(contacts.filter(contact => contact.id !== id));
                } 
            })
          
        }
    };

    return (
        <div className="text-center mx-auto" id="body">
            {contacts.map(contact => (
                <div className="card" id="divprincipal" key={contact.id}>
                    <img src={FotoAvatar} alt="Avatar" />
                    <div id="divDatosContacto">
                        <h4>{contact.name.toUpperCase()}</h4>
                        <li>{contact.address.toUpperCase()}</li>
                        <li>{contact.phone}</li>
                        <li>{contact.email.toUpperCase()}</li>
                    </div>
                    <div id="iconos">
                        <button className="inline-items">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                            </svg>
                        </button>
                        <button className="inline-items" onClick={() => borrarContacto(contact.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16" >
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
                            </svg>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};
