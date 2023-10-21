import React from "react";
import "./Skills.css";
import SkillsCard from "./SkillsCard";

const Skills = () => {

  const lang = ['Java','Python',"C","Kotlin","JavaScript","Dart"]
  const frontend = ['HTML',"CSS","React","XML"]
  const backend = ["Firebase","Mongo DB","Room Database","Node JS","Express JS","Flask","Sanity IO"] 
  return (
    <div className="skills">
      <div className="skills-heading">
        <h1 className="skills-title">Skills</h1>
        <h3>
          Here are some of my skills which I have been working on for the past 2
          years
        </h3>
      </div>
      <div className="skills-container">
        <div className="frontend-container">
          <SkillsCard skilltype={"Frontend"} skills={frontend}></SkillsCard>
        </div>
        <div className="backend-container">
          <SkillsCard skilltype={"Backend"} skills={backend}></SkillsCard>
        </div>
        <div className="lang-container">
          <SkillsCard skilltype={"Programing Languages"} skills={lang}></SkillsCard>
        </div>
      </div>
    </div>
  );
};

export default Skills;
