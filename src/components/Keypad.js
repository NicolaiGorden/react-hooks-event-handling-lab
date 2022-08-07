import React from 'react';

function Keypad (){
    return (
        <div>
            <input onChange = {handleChange} type="password"/>
        </div>
    )
}

function handleChange(event){
    console.log('Entering password...')
}

export default Keypad;