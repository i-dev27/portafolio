import React from "react";
import { Avatar } from "@material-ui/core";
import { Grid, Container } from "@material-ui/core";

export default function Projects() {
  return (
    <div className="projects-area">
      <Container fixed>
        <h1 className="projects-title">"My-Projects"</h1>
        <Grid spacing={1} container justify="flex-end" alignItems="center">
          <Grid item xs={1}>
            <Avatar alt="Irving Morales" src="./images/avatar.jpg" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
