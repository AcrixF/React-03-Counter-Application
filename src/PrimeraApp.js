//Functional Components
import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({greet, subtitle}) => {
 
    return (
        <>
            <h1>{ greet }</h1>
            {/* <pre>{JSON.stringify(user, null, 3)}</pre> */}
            <p>{ subtitle }</p>
        </>
    );
};

PrimeraApp.propTypes = {
    greet: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitle : 'Learning React!'
}

export default PrimeraApp;

