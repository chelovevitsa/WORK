import React, { FC, useState, ChangeEvent, FormEvent } from 'react';
import './styles.css';
import Pizza from '../models/Pizza';

interface EditPizzaFormProps {
    data: Pizza;
    updatePizza: (newPizza: Pizza) => void;
    handleEdit: () => void;
}

const EditPizzaForm: FC<EditPizzaFormProps> = ({ data, updatePizza, handleEdit }) => {
const [editPizza, setEditPizza] =
useState<Pizza>(data);

const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setEditPizza({
        ...editPizza,
        [name]: value
    })
}
const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const { title, price, img } = editPizza;

    if (title && price && img) {
        updatePizza(editPizza);
        handleEdit();
        };
    }

    return (
        <form className='edit-form' onSubmit={handleSubmit}>
            <input 
            name='title' 
            type="text" 
            placeholder="Name" 
            onChange={handleChange} 
            value={editPizza.title} />
            <input 
            name='price' 
            type="text" 
            placeholder="Price" 
            onChange={handleChange} 
            value={editPizza.price} />
            <input 
            name='img' 
            type="text" 
            placeholder="Photo" 
            onChange={handleChange} 
            value={editPizza.img} />
            <button type="submit">Confirm</button>
        </form>
    )
}
export default EditPizzaForm;