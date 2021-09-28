
import React, { Fragment} from 'react';
import PropTypes from 'prop-types';
import { reviewBudget } from '../helpers';

const ControlBudget = ({budget, rest}) => {
    return ( 
        <Fragment>
            <div className="alert alert-primary">
                Budget: $ {budget}
            </div>
            <div className={reviewBudget(budget, rest)}>
                Rest: $ {rest}
            </div>
        </Fragment>

     );
}

ControlBudget.propTypes = {
    budget: PropTypes.number.isRequired,
    rest: PropTypes.number.isRequired
}
 
export default ControlBudget;