import React from "react";
import { makeStyles, Grid, Container } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { headShake } from "react-animations";
import styled, { keyframes } from "styled-components";
import Contact from "../components/UserForm";
import UserForm from "../components/UserForm";

const HeadShake = styled.div`
  animation: 4s ${keyframes`${headShake}`} 4s;
`;

const useStyles = makeStyles((theme) => ({
  box: {
    marginTop: "200px",
    height: "450px",
  },

  box2: {
    backgroundImage: `url(${"./images/banneragency.png"})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    height: "450px",
    display: "block",
  },

  box3: {
    backgroundImage: `url(${"./images/banneragency2.png"})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "3% 75%",
    backgroundSize: "cover",
    height: "650px",
    display: "block",
  },

  intro2: {
    display: "flex",
    justifyContent: "center",
  },
  img: {
    display: "flex",
    justifyContent: "center",
  },
}));

function Agency(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container className={classes.box}>
        <Grid container spacing={24}>
          <Grid xs={6}>
            <Container className={classes.intro2}>
              <p className="text-agency">
                <h1>"I Solutions"</h1>
                Aqui es donde mi compañia te podra dar todo lo necesario para
                que tu negocio triunfe en el mercado tecnologico con asesoria
                personalizada.
              </p>
            </Container>
          </Grid>
          <Grid xs={6}>
            <Container className={classes.img}>
              <HeadShake>
                <img
                  className="mecoding"
                  src="./images/mecoding.png"
                  alt="mecoding"
                />
              </HeadShake>
            </Container>
          </Grid>
        </Grid>
      </Container>

      <Paper elevation={0} className={classes.box2}>
        <h1 className="text-agency">
          "We have the best solution for your company"
        </h1>
      </Paper>
      <Paper elevation={0} className={classes.box3}>
        
      </Paper>
      <UserForm/>

    </React.Fragment>
  );
}

export default Agency;
