import React from 'react' ;
import {FcSms} from 'react-icons/fc';
import {TiTimes} from 'react-icons/ti';
import './Modal.css'
const Modal = ({showModal}) => {
    return (
        <>
            <section className="modal__area">
               <div className="d-flex">
               <div className="theme__title">
                    <FcSms className='icon' />
                    <h3>280 handpicked colors</h3>
                </div>
                <button onClick={showModal} className="remove_icon"><TiTimes className='i' /></button>
               </div>
               <p>Flat UI Colors 2 features 13 more color palettes. Collaborating with 13 designers around the world, a total set of 280 colors are on your command for COPY / PASTE for your next project, design, presentation. </p>
            </section>   
        </>
    )
}

export default Modal
