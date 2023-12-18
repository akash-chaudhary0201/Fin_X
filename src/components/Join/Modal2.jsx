import React from 'react'

function Modal2({ open, onClose }) {
    if (!open) return null
    return (
        <>
            <div className="overlay_mod" >
                <div className="mod1_con">
                    <div className="modd">
                        <p style={{ cursor: "pointer" }} onClick={onClose}>X</p>
                        <h4>
                            As a Fintech Expert
                        </h4>
                        <form>
                            <input type="text" required placeholder='Enter Your Name' /> <br /> <br />
                            <input type="email" placeholder='Enter Your Email' required /> <br /> <br />
                            <input type="number" placeholder='Enter Your Phone Number' required /> <br /> <br />
                            <input className='sbmt_btn' type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal2
