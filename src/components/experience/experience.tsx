import React, { useMemo } from "react"
import "./experience.scss"
import { ExperienceType } from "../../types"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

interface contactProps {
    id:string,
    innerRef: React.RefObject<HTMLDivElement | null>,
    experience: ExperienceType[]
}

const Experience:React.FC<contactProps> = (props) =>{
    const{id, innerRef, experience} = props;

    const work = useMemo(()=>{
        if(experience.length){
            let mainTech :any, tech : any
            experience.map((exp, i) => {
                if(exp.mainTech){
                    mainTech = <div>{exp.mainTech}</div>
                }
                exp.technologies.map((technology, index)=>{
                    tech = <div key={index}>{technology}</div>
                })
            return(
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date={exp.years}
                    iconStyle={{
                    background: "#AE944F",
                    color: "#fff",
                    textAlign: "center",
                    }}
                    icon={<i className="fab fa-angular experience-icon"></i>}
                    key={i}
                >
                    <div style={{ textAlign: "left", marginBottom: "4px" }}>
                        {mainTech}
                    </div>

                    <h3
                        className="vertical-timeline-element-title"
                        style={{ textAlign: "left" }}
                    >
                    {exp.title}
                    </h3>
                    <h4
                        className="vertical-timeline-element-subtitle"
                        style={{ textAlign: "left" }}
                    >
                    {exp.company}
                    </h4>
                    <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>
                </VerticalTimelineElement>
            );
        })
        }
    },[]);
    return(
        <div className="experience-container" id={id} ref={innerRef}>
            <h1 className="heading">EXPERIENCE</h1>
            <div className="vertical-timeline-container">
                <div className="vertical-timeline-element">
                    <span className="vertical-timeline-element-icon">
                        <span className="skill-icon icon-react"></span>
                    </span>
                    <div className="vertical-timeline-element-content">
                            {/* <VerticalTimeline>
                                {work}
                                <VerticalTimelineElement
                                    iconStyle={{
                                        background: "#AE944F",
                                        color: "#fff",
                                        textAlign: "center",
                                    }}
                                    icon={
                                        <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
                                    }
                                />
                            </VerticalTimeline> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience