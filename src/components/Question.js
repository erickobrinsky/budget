import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const Question = ({ saveBudget, saveRest, updateQuestion }) => {

    // definir el state
    const [ quantity, saveQuantity ] = useState(0);
    const [ error, saveError] = useState(false);

    // Función que lee el presupuesto
    const defineBudget = e => {
        saveQuantity( parseInt(e.target.value, 10) )
    }

    // Submit para definir el presupuesto
    const addBudget = e => {
        e.preventDefault();

        // Validar
        if(quantity < 1 || isNaN( quantity ) ) {
            saveError(true);
            return;
        }

        // si se pasa la validación
        saveError(false);
        saveBudget(quantity);
        saveRest(quantity);
        updateQuestion(false);
    }

    return ( 
        <Fragment>
            <h2>Add your budget</h2>

            { error ? <Error mensaje="Your budget is wrong" />  : null }

            <form
                onSubmit={addBudget}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Add your budget"
                    onChange={defineBudget}
                />

                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Define your budget"
                />
            </form>
        </Fragment>

     );
}

Question.propTypes = {
    saveBudget: PropTypes.func.isRequired,
    saveRest: PropTypes.func.isRequired,
    updateQuestion: PropTypes.func.isRequired
}
 
export default Question;