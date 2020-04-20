import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div className="resume-page">
        <Grid>
          <Cell col={4} className="resume-left-col">
            <div style={{ textAlign: "center" }}>
              <img
                src="./img/avatar.png"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Martinus Budiman</h2>
            <h4 style={{ color: "grey" }}>Student</h4>
            <hr style={{ borderTop: "3px solid #ffffff" }} />
            <p>
              Last year university student looking for a new experience and
              eager to learn new things, currently working on the final
              assignment and looking forward for work experience.
            </p>
            <h5>Address</h5>
            <p>Kav. Polri Blok A18/392A, Jelambar, Grogol Petamburan</p>
            <h5>Phone</h5>
            <p>(+62)838 0774 1777</p>
            <h5>Email</h5>
            <p>martinusbudiman98@gmail.com</p>
            <h5>Linkedin</h5>
            <p>linkedin.com/martinus1003</p>
            <hr style={{ borderTop: "3px solid #ffffff", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2010}
              endYear={2013}
              schoolName={"SMPK 2 BPK Penabur"}
              schoolDescription={""}
            />
            <Education
              startYear={2013}
              endYear={2016}
              schoolName={"SMAK 4 BPK Penabur"}
              schoolDescription={"Social Science"}
            />
            <Education
              startYear={2016}
              endYear={2020}
              schoolName={"Universitas Tarumanagara"}
              schoolDescription={"Information System || GPA : 3.43"}
            />
            <hr style={{ borderTop: "3px solid #ffffff", width: "50%" }} />
            <h2>Experience</h2>
            <Experience
              startYear={2019}
              endYear={2019}
              jobName={"IT Development Analyst Intern"}
              jobDescription={"PT. Kirana Megatara TBK. || Aug - Sept"}
            />
            <Experience
              startYear={2020}
              endYear={2021}
              jobName={"Junior Front End Developer Intern"}
              jobDescription={"PT. Home Credit Indonesia || Feb - Now"}
            />
            <hr style={{ borderTop: "3px solid #ffffff", width: "50%" }} />
            <h2>skills</h2>
            <Skills skill="HTML" progress={75} />
            <Skills skill="PHP" progress={70} />
            <Skills skill="CSS" progress={65} />
            <Skills skill="Bootstrap" progress={60} />
            <Skills skill="MYSQL" progress={70} />
            <Skills skill="React.js" progress={35} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
