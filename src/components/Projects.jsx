import React from "react";
import { Avatar } from "@material-ui/core";
import { Grid, Container } from "@material-ui/core";
import styled, { keyframes } from "styled-components";
import { bounceIn } from "react-animations";

const Bounce = styled.div`
  animation: 5s ${keyframes`${bounceIn}`} infinite;
`;

export default function Projects() {
  return (
    <div className="projects-area">
      <Container fixed>
        <Bounce>
          <h1 className="projects-title">"My-Projects"</h1>
        </Bounce>

        <Grid spacing={1} container justify="flex-end" alignItems="center">
          <Grid item xs={1}>
            <Bounce>
              <Avatar alt="Irving Morales" src="./images/avatar.jpg" />
            </Bounce>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
