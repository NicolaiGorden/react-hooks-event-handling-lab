import React from 'react';

function EyesOnMe() {
    return (
        <button onFocus={focus} onBlur={blur}>Eyes on me</button>
    )
}

function focus(event){
    console.log('Good!')
}

function blur(event){
    console.log('Hey! Eyes on me!')
}
export default EyesOnMe