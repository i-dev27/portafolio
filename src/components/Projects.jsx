import React from "react";
import { Avatar } from "@material-ui/core";
import Logo from "Logo.jsx";
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
          <h1 className="projects-title">
            "My Name is Irving R. and I am Software Developer <br /> I've been
            in this field for 5 months. <br /> I am also a creative content
            marketing director "
          </h1>
        </Bounce>

        <Grid spacing={1} container justify="flex-end" alignItems="center">
          <Grid item xs={1}>
            <Bounce>
              <Avatar alt="Irving Morales" src="./images/avatar.jpg" />
            </Bounce>
          </Grid>
        </Grid>
        <Logo />
      </Container>
    </div>
  );
}
