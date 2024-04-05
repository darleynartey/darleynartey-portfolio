import React from "react";
import "./Qualification.css";

const Qualification = () => {
  return (
    <section className="qualification section">
      <h2 className="section_title">Qualification</h2>
      <p className="section_subtitle">My personal journey</p>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div className="qualification_button qualification_active button--flex">
            <i className="uil uil-graduation-cap qualification_icon"></i>
            Education
          </div>

          <div className="qualification_button qualification_active button--flex">
            <i className="uil uil-briefcase-alt qualification_icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification_sections">
          <div className="qualification_content qualification_content-active">
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Web Developer Trainee</h3>
                <span className="qualification_subtitle">MEST Africa</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i> 2024 - Present
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>


            
            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">Junior Web Developer</h3>
                <span className="qualification_subtitle">Corextreme</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i> April, 2024 - Present
                </div>
              </div>
            </div>
        

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">BA Economics & Religion</h3>
                <span className="qualification_subtitle">University of Ghana</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i> 2018 - 2022
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            
            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">Sales Specialist</h3>
                <span className="qualification_subtitle">Sevn Ghana Limited</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i> Nov. 2022 - Oct. 2023
                </div>
              </div>
            </div> 

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">BA Economics</h3>
                <span className="qualification_subtitle">University of Ghana</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i> 2018 - 2022
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>


            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">Administrative Assistant</h3>
                <span className="qualification_subtitle">Crowdfrica</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i>Oct. 2020 - April, 2021
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
