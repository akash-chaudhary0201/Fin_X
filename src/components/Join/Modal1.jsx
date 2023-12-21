import React from 'react'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// toast.configure();

function Modal1({ open, onClose }) {

    if (!open) return null

    const notify = () => {
        toast("Message Sent Successfulyy!!!!!!");
    }

    const sbmt = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <div className="overlay_mod" >
                <div className="mod1_con">
                    <div className="modd">
                        <p style={{ cursor: "pointer" }} onClick={onClose}>X</p>
                        <h4>
                            As a Client
                        </h4>
                        <form onSubmit={sbmt}>
                            <input type="text" required placeholder='Enter Your Name' /> <br /> <br />
                            <input type="email" placeholder='Enter Your Email' required /> <br /> <br />
                            <input type="number" placeholder='Enter Your Phone Number' required /> <br /> <br />
                            <input onClick={notify} className='sbmt_btn' type="submit" />
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal1
