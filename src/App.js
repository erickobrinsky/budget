import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import Formulario from './components/Formulario';
import List from './components/List';
import ControlBudget from './components/ControlBudget';

function App() {

  // definir el state
  const [ budget, saveBudget] = useState(0);
  const [ rest, saveRest] = useState(0);
  const [ showQuestion, updateQuestion ] = useState(true);
  const [ expenses, saveExpenses] = useState([]);
  const [ expense, saveExpense ] = useState({});
  const [ createExpense, saveCreateExpense ] = useState(false);

  // UseEffect que actualiza el restante

  useEffect(() => {
      if(createExpense) {

          // agrega el nuevo presupuesto
          saveExpense([
            ...expenses,
            expense
          ]);

          // resta del presupuesto actual
          const budgetRest = rest - expense.quantity;
          saveRest(budgetRest);

          // Resetear a false
          saveCreateExpense(false);
      }
  }, [expense, createExpense, expenses, rest]);


  return (
    <div className="container">
        <header>
            <h1>Weekly expense</h1>

            <div className="contenido-principal contenido">
              { showQuestion ?  
                ( 
                  <Question 
                    saveBudget={saveBudget}
                    saveRest={saveRest}
                    updateQuestion={updateQuestion}
                  />
                )  :  (
                  <div className="row">
                      <div className="one-half column">
                          <Formulario 
                            saveExpense={saveExpense}
                            saveCreateExpense={saveCreateExpense}
                          />
                      </div>

                      <div className="one-half column">
                         <List
                            expenses={expenses}
                         />

                         <ControlBudget 
                            budget={budget}
                            rest={rest}
                          />
                      </div>
                  </div>
                ) 
              }
            </div>
        </header>
    </div>
  );
}

export default App;