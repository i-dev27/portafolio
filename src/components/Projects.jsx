import React from "react";
import UserForm from "../src/components/UserForm.jsx";
import Form from "react-bootstrap/Form";
import { Avatar, makeStyles } from "@material-ui/core";
import { Grid, Container } from "@material-ui/core";
import styled, { keyframes } from "styled-components";
import { bounceIn } from "react-animations";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import InsertEmoticonTwoToneIcon from "@material-ui/icons/InsertEmoticonTwoTone";
import VideocamTwoToneIcon from "@material-ui/icons/VideocamTwoTone";
import CodeTwoToneIcon from "@material-ui/icons/CodeTwoTone";
import CardTravelTwoToneIcon from "@material-ui/icons/CardTravelTwoTone";

const Bounce = styled.div`
  animation: 5s ${keyframes`${bounceIn}`} 5s;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    "& > .fa": {
      margin: theme.spacing(2),
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function Projects() {
  const classes = useStyles();
  return (
    <div className="projects-area">
      <Container fixed>
        <Bounce>
          <h1 className="projects-title">
            "Mi nombre es Irving Rabanales y soy Software Developer <br /> Llevo
            1 año en el desarrollo de Web-Apps para comercios 100%
            personalizadas
            <br /> Y tengo la experiencia de 10 años en Marketing Digital
            utilizando todas las tecnologias relevantes del mercado.
          </h1>
        </Bounce>

        <Grid spacing={1} container justify="flex-end" alignItems="center">
          <Grid item xs={1}>
            <Bounce>
              <Avatar
                alt="Irving Morales"
                src="./images/avatar.jpg"
                className={classes.large}
              />
            </Bounce>
          </Grid>
        </Grid>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgb(169,169,169)",
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(105, 105, 105)",
            }}
            date="2011 - present"
            iconStyle={{
              background: "radial-gradient(#DCDCDC, #000000)",
              boxShadow:
                "0 0 0 4px #0f0f0f,inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)",
              color: "#fff",
            }}
            icon={<InsertEmoticonTwoToneIcon fontSize="large" />}
          >
            <h3 className="vertical-timeline-element-title">Digital Creator</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Antigua Guatemala, Sacatepequez
            </h4>
            <p>
              Te Ofrezco los mejores servicios de tecnologia, desde la creacion
              de tu sitio Web, WebApp, Marketing digital, Manejo de
              Redes-Sociales todo 100% personalizado.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgb(105, 105, 105)",
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(105, 105, 105)",
            }}
            date="2020 - 2020"
            iconStyle={{
              background: "radial-gradient(#DCDCDC, #000000)",
              boxShadow:
                "0 0 0 4px #0f0f0f,inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)",
              color: "#fff",
            }}
            icon={<VideocamTwoToneIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Marketing Promoter and Video Business Creation of Sistema by OG!
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Antigua Guatemala,Sacatepequez.
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
            contentStyle={{
              background: "rgb(169,169,169",
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(105, 105, 105)",
            }}
            date="2020 - 2020"
            iconStyle={{
              background: "radial-gradient(#DCDCDC, #000000)",
              boxShadow:
                "0 0 0 4px #0f0f0f,inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)",
              color: "#fff",
            }}
            icon={<CodeTwoToneIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Development at Mishopin Store
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
            contentStyle={{
              background: "rgb(169,169,169",
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(105, 105, 105)",
            }}
            date="2009 - 2020"
            iconStyle={{
              background: "radial-gradient(#DCDCDC, #000000)",
              boxShadow:
                "0 0 0 4px #0f0f0f,inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)",
              color: "#fff",
            }}
            icon={<CardTravelTwoToneIcon />}
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

      <UserForm
        cancel={this.cancel}
        errors={this.errors}
        submit={this.submit}
        passwordErrors={this.confirmed}
        submitButtonText="Sign-in"
        elements={() => (
          <React.Fragment>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                value={this.email}
                placeholder="isolutions@gmail.com"
                onChange={this.change}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                name="password"
                value={this.password}
                placeholder="password"
                onChange={this.change}
              />
            </Form.Group>
          </React.Fragment>
        )}
      />
    </div>
  );
}
