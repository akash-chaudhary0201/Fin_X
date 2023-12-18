import React from 'react'
import ai1 from "./it_images/ai1.jpeg"
import ai2 from "./it_images/ai2.jpeg"

const aiContent = {
    main: {
        backgroundImage: ai1,
        title: "Artificial Intelligence"
    },
    second: {
        title: " REVOLUTIONIZE YOUR FINTECH BUSINESS WITH CUTTING-EDGE TECHNOLOGIES",
        des: " Our AI solutions leverage new-age technologies like artificial intelligence and machine learning to help banks and credit unions extend the capabilities of their existing systems and solve complex problems in a more efficient and cost-effective manner. Our solutions automate manual processes, reduce errors, and provide real-time insights into customer behavior and market trends."
    },
    third: {
        title: "TRANSFORM INSIGHTS INTO REVENUE",
        des: "We FinX combine deep domain expertise in fintech with advanced data engineering, data science, and statistical analysis techniques to help you solve complex business problems. Our coordinated approach to every AI/ML project enables us to optimize your processes."
    },
    fourth: {
        title: "Our Unique Advantage:",
        content: {
            left: [
                "Accelerate your fintech vision with effective AI/ML solutions.",
                "Transform your data into actionable business intelligence.",
                "Achieve operational excellence and reduce costs.",
                "Drive revenue growth by improving customer experiences.",
                "Benefit from our unique methodology, tailored to your specific needs and goals.",
                "Bring your AI/ML projects to market faster with our expertise and support."
            ],
            right: ai2
        }
    },
    fifth: {
        title: "Capabilities",
        subTitle: "Increase your competitive edge with an experienced AI/ML partner",
        des: "Tailored AI/ML solutions for your unique business challenges.",
        capabilities: [
            {
                title: "Consulting Services",
                des: "Take advantage of our expertise in data strategy evaluation, and exploration, along with our analysis and strategic planning for data pipelines."
            },
            {
                title: "Intelligence & Visualization",
                des: "Discover insights beyond the dashboard by utilizing visualization tools that produce impactful and data-driven experiences."
            },
            {
                title: "AI & ML Technologies",
                des: "Create intelligent systems that imitate human tasks with reduced effort, and construct chatbots or intelligent assistants utilizing RPA or NLP."
            }
        ]
    }
}

function Ai() {



    return (
        <>
            <div className="ai_main" style={{ backgroundImage: `url(${aiContent.main.backgroundImage})`, height: "80vh" }} >
                <div className="span2">
                    <h1 style={{ color: "#23506D" }}>
                        {aiContent.main.title}
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


export { Ai, aiContent };
