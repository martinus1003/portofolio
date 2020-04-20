import React from "react";
import { Grid, Cell } from "react-mdl";

const LandingPage = () => {
  return (
    <div className="landing-body">
      <Grid className="landing-grid">
        <Cell col={5}>
          <img src="./img/avatar.png" alt="avatar" className="avatar-img" />
        </Cell>
        <Cell col={7}>
          <div className="banner-text">
            <h1>Martinus Budiman</h1>
            <hr />

            <p>HTML/CSS | Bootstrap | MySQL | PHP | Microsoft Office</p>
            <div className="social-links">
              {/* Linkedin*/}
              <a
                href="http://linkedin.com/in/martinus1003"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-linkedin" aria-hidden="true" />
              </a>
              {/* Instagram*/}
              <a
                href="http://instagram.com/martinus1003"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-instagram" aria-hidden="true" />
              </a>
              {/* Twitter*/}
              <a
                href="http://twitter.com/atunatin"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-twitter" aria-hidden="true" />
              </a>
              {/* youtube*/}
              <a
                href="https://www.youtube.com/channel/UCf654fKkWqP5oY0-I-6xSkA"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-youtube-square  " aria-hidden="true" />
              </a>
            </div>
          </div>
        </Cell>
      </Grid>
    </div>
  );
};

export default LandingPage;
