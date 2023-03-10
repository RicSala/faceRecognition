import React from "react";
import './ImageLinkForm.css'


const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className="f3 white">
                {'Give it a try'}
            </p>
            <div>
                <div className="center form shadow-5">
                    <input className='f4 pa2 w-70 center' type='text' onChange={ onInputChange }/>
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple pointer b--none'
                    onClick={ onButtonSubmit }>Detect</button>
                </div>
            </div>
        </div>
    );

}

export default ImageLinkForm; 
