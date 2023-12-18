import React, { useState } from 'react'
import join1 from "./Join_Images/join.jpg"
import Modal1 from './Modal1'
import Modal2 from './Modal2'

function Join() {


    const [modalOpen1, setmodalOpen1] = useState(false)
    const [modalOpen2, setmodalOpen2] = useState(false)


    return (
        <>
            <div className="join_main">
                <div className="join_con">
                    <div className="services_main" style={{ backgroundImage: `url(${join1})`, height: "80vh" }}>
                        <div className="span2">
                            <h1>
                                Join Us
                            </h1>
                        </div>
                    </div>
                    <div className="join_sec">
                        <div className="join_btns">
                            <h1>
                                You Can Join Us As
                            </h1>
                            <button onClick={() => {
                                setmodalOpen1(true);
                                document.body.style.overflowY = 'hidden';
                            }} >
                                As a Client
                            </button>

                            <button onClick={() => {
                                setmodalOpen2(true);
                                document.body.style.overflowY = 'hidden';
                            }}>
                                As a Fintech Expert
                            </button>
                            <Modal1 open={modalOpen1} onClose={() => {
                                setmodalOpen1(false);
                                document.body.style.overflowY = 'visible';
                            }} />


                            <Modal2 open={modalOpen2} onClose={() => {
                                setmodalOpen2(false);
                                document.body.style.overflowY = 'visible';
                            }} />

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Join
