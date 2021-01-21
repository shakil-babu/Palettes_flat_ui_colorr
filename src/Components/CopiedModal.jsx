import React from 'react'
import './CopiedModal.css'

const CopiedModal = () => {
    const message = ['Paste Now!','Copied!','Ready to paste!','Paste it!', 'Copied Now!','Yay, Copied!'];
    const randomNumber = Math.floor(Math.random()* message.length);
    const title = message[randomNumber]
    return (
        <>
            <section className='copied__area'>
                <h1>{title}</h1>
                <p>Shakil Babu</p>
            </section>
        </>
    )
}

export default CopiedModal
