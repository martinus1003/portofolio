import React from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

const AboutMe = () => {
  return (
    <div className="aboutme-body">
      <Grid className="contact-grid">
        <Cell col={6}>
          <h2>Martinus Budiman</h2>
          <img
            src="./img/avatar.png"
            alt="avatar"
            style={{ height: "250px" }}
          />
        </Cell>
        <Cell col={6}>
          <h2>About Me</h2>
          <hr />
          <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent
                  style={{
                    fontSize: "20px",
                    fontFamily: "Prompt",
                    color: "white",
                  }}
                >
                  <p>
                    Last year university student looking for a new experience
                    and eager to learn new things, currently working on the
                    final assignment and looking forward for work experience.
                  </p>
                </ListItemContent>
              </ListItem>
            </List>
          </div>
        </Cell>
      </Grid>
    </div>
  );
};

export default AboutMe;
