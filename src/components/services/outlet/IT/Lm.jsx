import React from 'react'
import { aiContent } from './Ai'
import mod1 from "./it_images/modern.jpg"

function Lm() {
    return (
        <>
            <div className="ai_main" style={{ backgroundImage: `url(${mod1})`, height: "80vh" }} >
                <div className="span2">
                    <h1 style={{ color: "#23506D" }}>
                        Legacy Modernization
                    </h1>
                </div>
            </div>
            <div className="ai_sec">
                <div className="ai_sec_con">
                    <div className="ai_sec_lef">
                        <h3>
                            {aiContent.second.title}
                        </h3>
                    </div>
                    <div className="ai_sec_right">
                        <p>
                            {aiContent.second.des}
                        </p>
                    </div>
                </div>
            </div>
            <div className="ai_third">
                <div className="ai_third_con">
                    <h2>
                        {aiContent.third.title}
                    </h2>
                    <p>
                        {aiContent.third.des}
                    </p>
                </div>
            </div>
            <div className="ai_fourth">
                <div className="fourth_content">
                    <h1>
                        {aiContent.fourth.title}
                    </h1>
                    <div className="fourth_both">
                        <div className="fourth_left">
                            <ul>
                                {aiContent.fourth.content.left.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>

                        </div>
                        <div className="fourth_right">
                            <img src={aiContent.fourth.content.right} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="ai_fifth">
                <div className="fith_con">
                    <h1 className='fif_head'>
                        {aiContent.fifth.title}
                    </h1>
                    <h5 className='fif_sub'>
                        {aiContent.fifth.subTitle}
                    </h5>
                    <p className='fif_para'>
                        {aiContent.fifth.des}
                    </p>
                    <div className="fifth_divs">

                        {aiContent.fifth.capabilities.map((capability, index) => (
                            <div className="fif_div" key={index}>
                                <div className="fif_div_con">
                                    <h3>
                                        {capability.title}
                                    </h3>
                                    <p>
                                        {capability.des}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Lm
