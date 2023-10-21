import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="about-container">
      <div className="about-main-text ">
        <h1>About Me</h1>
      </div>
      <div className="content">
        <div className="summary-container flex1">
          <div className="summary">
            <h1>Summary</h1>
            <p>
              I'm a passionate technology enthusiast pursuing a Bachelor's
              degree in Artificial Intelligence and Machine Learning at New
              Horizon College of Engineering. Alongside my main focus, I
              actively engage in Android App Development and Web Development. My
              keen interest in Data Structures and Algorithms enhances my
              problem-solving abilities and project performance. My ultimate aim
              in software development is to leverage my skills to make a
              positive impact on society and simplify people's lives.
            </p>
          </div>
        </div>
        <div className="timeline-container  flex1">
          <div class="timeline">
            <div class="outer">
              <div class="card">
                <div class="info">
                  <h3 class="title">New Horizon College of Engineering</h3>
                  <p>
                    Bachelor of Engineering - BE, Artficial Intelligence and
                    Machine Learning{" "}
                  </p>
                  <p>Grade: 9.48 </p>
                  <p>Sept 2020 - Aug 2025 </p>
                </div>
              </div>
              <div class="card">
                <div class="info">
                  <h3 class="title">Vydehi School Of Excellence</h3>
                  <p>Class 12 - CBSE </p>
                  <p>March 2019 - June 2020 </p>
                  <p>Grade: 90% </p>
                </div>
              </div>
              <div class="card">
                <div class="info">
                  <h3 class="title">Ryan Global School</h3>
                  <p>Class 10 - IGCSE </p>
                  <p>Grade: 80% </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
