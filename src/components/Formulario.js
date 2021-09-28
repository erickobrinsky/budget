import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Error from './Error';

const Formulario = ({saveExpense, saveCreateExpense}) => {

    const [name, saveName] = useState('');
    const [quantity, saveQuantity] = useState(0);
    const [ error, saveError] = useState(false);

    
    // cuando el usuario agrega un gasto
    const addExpense = e => {
        e.preventDefault();

        // validar
        if(quantity < 1 || isNaN( quantity) || name.trim() === '') {
            saveError(true);
            return;
        }
        saveError(false);

        // construir el gasto
        const expense = {
            name, 
            quantity, 
            id: shortid.generate()
        }

        // pasar el gasto al componente principal
        saveExpense(expense);
        saveCreateExpense(true);

        // resetear el form
        saveName('');
        saveQuantity(0);
    }

    return ( 
        <form
            onSubmit={addExpense}
        >
            <h2>Add your expense here</h2>

            { error ? <Error mensaje="Both fields are mandatory or budget incorrect" /> : null }


            <div className="campo">
                <label>Expense name</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transport"
                    value={name}
                    onChange={e => saveName(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Expense quantity</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ex. 300"
                    value={quantity}
                    onChange={e => saveQuantity( parseInt( e.target.value, 10 ) )}
                />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Add expense"
            />

        </form>

     );
}

Formulario.propTypes = {
    saveExpense: PropTypes.func.isRequired,
    saveCreateExpense: PropTypes.func.isRequired
}
 
export default Formulario;