import React from 'react';
import './Modal.css'


const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';

    return (
        <div className={showHideClassName} >
            <section className='modal-main'>
                <div>
                    <div className='model-text' >{children}
                        <span><button className='modal-button' onClick={handleClose}>&times;</button></span>
                    </div>
                </div>

            </section>
        </div >
    );
};


export default Modal