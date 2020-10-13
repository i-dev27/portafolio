import React from "react";
import UserForm from "./UserForm.jsx";
import { Avatar, makeStyles, Grid, Container, Paper } from "@material-ui/core";
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
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

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
    width: theme.spacing(20),
    height: theme.spacing(20),
  },

  paperintro: {
    backgroundImage: `url(${"./images/banner1.png"})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    height: "450px",
    display: "block",
    marginTop: "120px",
    paddingTop: "30px",
  },

  avatar: {
    display: "flex",
    justifyContent: "center",
    padding: "100px 100px 0px 100px",
  },
  intro: {
    display: "block",
    justifyContent: "center",
    padding: "50px",
  },
  icons: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    padding: "0",
    marginBottom: "100px",
  },
  instaIcon: {
    color: "black",
    margin: "0",
  },
}));

export default function Projects() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container className={classes.paperintro}>
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <Bounce>
              <Container className={classes.intro}>
                <h1 className="title-intro">
                  "Mi nombre es Irving Rabanales y soy Software Developer:
                </h1>{" "}
                <br />
                <p className="paragraph-intro">
                  Llevo 1 año en el desarrollo de Web-Apps para comercios 100%
                  personalizadas Y tengo la experiencia de 10 años en Marketing
                  Digital utilizando todas las tecnologias relevantes del
                  mercado.
                </p>
              </Container>
            </Bounce>
          </Grid>

          <Grid item xs={6}>
            <Bounce>
              <Container className={classes.avatar}>
                <Avatar
                  alt="Irving Morales"
                  src="./images/avatar.jpg"
                  borderRadius="50%"
                  className={classes.large}
                />
              </Container>
              <Container className={classes.icons}>
                <InstagramIcon className={classes.instaIcon} />
                <FacebookIcon className={classes.faceIcon} />
              </Container>
            </Bounce>
          </Grid>
        </Grid>
      </Container>

      <Container fixed>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#00a86b",
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(0, 0, 0)",
            }}
            date="2011 - present"
            iconStyle={{
              background: "radial-gradient(#00a86b, #000000)",
              boxShadow:
                "0 0 0 4px #0f0f0f,inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)",
              color: "#fff",
            }}
            icon={<InsertEmoticonTwoToneIcon fontSize="large" />}
          >

            <img className="imagemk" src="../images/digitalm.png" alt="imagemk" />
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
              borderRight: "7px solid  rgb(0, 0, 0)",
            }}
            date="2020 - 2020"
            iconStyle={{
              background: "radial-gradient(#00a86b, #000000)",
              boxShadow:
                "0 0 0 4px #0f0f0f,inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)",
              color: "#fff",
            }}
            icon={<VideocamTwoToneIcon />}
          >
            <img className="sistema" src="../images/sistema.png" alt="sistema" />
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
              background: "#00a86b",
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(0, 0, 0)",
            }}
            date="2020 - 2020"
            iconStyle={{
              background: "radial-gradient(#00a86b, #000000)",
              boxShadow:
                "0 0 0 4px #0f0f0f,inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)",
              color: "#fff",
            }}
            icon={<CodeTwoToneIcon />}
          >
            <img className="mishopin" src="../images/mishopin.png" alt="mishopin" />

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
              borderRight: "7px solid  rgb(0, 0, 0)",
            }}
            date="2009 - 2020"
            iconStyle={{
              background: "radial-gradient(#00a86b, #000000)",
              boxShadow:
              "0 0 0 4px #0f0f0f,inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)",
              color: "#fff",
            }}
            icon={<CardTravelTwoToneIcon />}
          >
        <img className="mb" src="../images/mb.png" alt="mb" />

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

      <UserForm />
    </React.Fragment>
  );
}
