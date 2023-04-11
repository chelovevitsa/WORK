import React, { FC, useState } from 'react';
import Pizza from '../models/Pizza';
import EditPizzaForm from '../components/EditPizzaForm';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';

interface SinglePizzaProps {
    pizza: Pizza;
    updatePizza: (newPizza: Pizza) => void;
    deletePizza: (id: number) => void;
}

const SinglePizza: FC<SinglePizzaProps> = ({pizza, updatePizza, deletePizza}) => {
    const [edit, setEdit] = useState<boolean>(false);
    const handleEdit = () => {
        setEdit(!edit);
    }
    const handleDelete = () => {
        deletePizza(pizza.id);
    }

    return (
        <div className='pizza'>
            <img src={`/images/${pizza.img}`} alt={pizza.title} />
            <h2>{pizza.title}</h2>
            <span>{pizza.price} RUB</span>

            <div className='pizza-controls'>
                <AiFillEdit onClick={handleEdit} />
                <AiFillDelete onClick={handleDelete} />
            </div>

            {edit
            ? <EditPizzaForm 
            data={pizza}
            updatePizza={updatePizza}
            handleEdit={handleEdit} />
            : null
            }
        </div>
    )
}

export default SinglePizza;