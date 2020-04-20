import React from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

const Contact = () => {
  return (
    <div className="contact-body">
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
          <h2>Contact Me</h2>
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
                  <i className="fa fa-phone-square" aria-hidden="true" />
                  (+62) 838 0774 1777
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent
                  style={{
                    fontSize: "20px",
                    fontFamily: "Prompt",
                    color: "white",
                  }}
                >
                  <i className="fa fa-envelope" aria-hidden="true" />
                  martinusbudiman98@gmail.com
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent
                  style={{
                    fontSize: "20px",
                    fontFamily: "Prompt",
                    color: "white",
                  }}
                >
                  <i className="fa fa-linkedin" aria-hidden="true" />
                  linkedin.com/martinus1003
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent
                  style={{
                    fontSize: "20px",
                    fontFamily: "Prompt",
                    color: "white",
                  }}
                >
                  <i className="fa fa-instagram" aria-hidden="true" />
                  @martinus1003
                </ListItemContent>
              </ListItem>
            </List>
          </div>
        </Cell>
      </Grid>
    </div>
  );
};

export default Contact;
