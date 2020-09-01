import React from "react";
import { Card, Grid } from "@material-ui/core";

function About(props) {
  return (
    <div className="about-title">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid item xs={0}>
          <Card alignItems="center">
            <h1 className="title">I am a software developer</h1>
            <p>
              Mi nombre es Irving Rabanales y he trabajado en varios projectos.
              Puedo desarrollar cualquier applicacion hibrida o nativa para tu
              negocio. <br /> Durante este tiempo en el cual la tecnologia bien
              con un boom total ayudarte a darle esa personificacion
              tecnologica.
            </p>
            <h2>"I" solutions</h2>
            <p>
              Aqui es donde mi compañia te podra dar todo lo necesario para que
              tu negocio triunfe en el mercado tecnologico con asesoria
              personalizada.
            </p>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
