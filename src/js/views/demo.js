import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/demo.css";

export const Demo = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault(); // Previene el comportamiento por defecto del formulario

        // Crear un nuevo objeto de contacto con los valores del formulario
        const newContact = {
            name: fullName,
            phone: phone,
            email: email,
            address: address,
        };

        // Realizar una petición POST para añadir el nuevo contacto
        fetch('https://playground.4geeks.com/contact/agendas/Beka/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newContact) // Convertir el objeto de contacto a una cadena JSON
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Limpiar los campos del formulario después de una respuesta exitosa
            setFullName("");
            setEmail("");
            setPhone("");
            setAddress("");
        })
        
    };

    return (
        <div className="container">
            <h1>Add a new contact</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Full Name</label>
                    <input 
                        type="text" 
                        placeholder="Full Name" 
                        className="form-control" 
                        id="exampleInputName" 
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input 
                        type="email" 
                        placeholder="Enter email" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputNumber" className="form-label">Phone</label>
                    <input 
                        type="text" 
                        placeholder="Enter phone" 
                        className="form-control" 
                        id="exampleInputNumber" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputAddress" className="form-label">Address</label>
                    <input 
                        type="text" 
                        placeholder="Enter address" 
                        className="form-control" 
                        id="exampleInputAddress" 
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn w-100" id="button">Save</button>
            </form>
            <Link to="/">
                <button className="btn mt-3" id="button">Back home</button>
            </Link>
        </div>
    );
};
