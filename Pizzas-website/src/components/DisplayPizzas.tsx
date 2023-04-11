import React, { FC, useState } from 'react';
import Pizza from '../models/Pizza';
import SinglePizza from '../components/SinglePizza';

interface DisplayPizzasProps {
    pizzasList: Pizza[];
    updatePizza: (newPizza: Pizza) => void;
    deletePizza: (id: number) => void;
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({pizzasList, updatePizza, deletePizza}) => {
    return (
        <div className='conatiner'>
            {pizzasList.map((pizza) => {
                return <SinglePizza 
                key={pizza.id} 
                updatePizza={updatePizza}
                deletePizza={deletePizza}
                pizza={pizza} />
            })}
        </div>
    )
}

export default DisplayPizzas;