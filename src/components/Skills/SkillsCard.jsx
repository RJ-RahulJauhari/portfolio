import React from "react";
import "./SkillsCard.css";
const SkillsCard = ({ skills,skilltype}) => {
  return (
    <div className="skill-card">
      <h1>{skilltype}</h1>
      <div className="tags">
        {skills.map((skill, index) => {
            return(
            <div key={index} className="skill-box">
                <p>{skill}</p>
            </div>)
        })
        }
      </div>
    </div>
  );
};

export default SkillsCard;
