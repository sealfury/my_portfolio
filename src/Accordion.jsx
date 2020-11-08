import React, { useState, useRef } from "react";
import "./Accordion.css";

function Accordion(job){
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordion_icon");
    
    
    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px`)
        setRotateState(setActive === "active" ? "accordion_icon" : "accordion_icon rotate")
        
    }
    
    return (
        <div className="accordion_section">
            <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
                <i className={`${setRotate}`} aria-hidden="true" class="dropdown icon"></i>
                <p className="accordion_title">{job.name}</p>
            </button>
            <div ref={content} style={{maxHeight: `${setHeight}`}}className="accordion_content">
                <div 
                   className="accordion_text"
                   dangerouslySetInnerHTML ={{ __html: job.description }}
                />
            </div>
        </div>
    );
}
export default Accordion
