import React from "react";
import { Avatar } from "@material-ui/core";
import { Grid, Container } from "@material-ui/core";
import styled, { keyframes } from "styled-components";
import { bounceIn } from "react-animations";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import BackupIcon from "@material-ui/icons/Backup";

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
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgb(33, 150, 243)",
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(33, 150, 243)",
            }}
            date="2011 - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<BackupIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Creative Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2020"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Promoter and Video Business Creation of Sistema by OG
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Antigua Guatemala
            </h4>
            <p>
              Tener la oportunidad que mis clientes tengan la confianza
              depositar su marca para promocionarlos en un gran previlegio el
              cual me permite aplicar mis habilidades para poder llevar su marca
              al siguiente nivel.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2020"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Front-End Development Mishopin
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Antigua Guatemala
            </h4>
            <p>
              Creacion de Features y Componentes utilizando la tecnologia mas
              popular en el mercado tecnologico creado por Facebook "React.js"{" "}
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2009 - 2020"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Manager of Hostel Maison Bougainvillea{" "}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Antigua Guatemala
            </h4>
            <p>
              Marketing Manager y Director Creativo de Marca, logrando
              posicionamiento internacional durante 10 años de experiencia en
              manejo de Social Media y creacion de audiencia.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Container>
    </div>
  );
}
