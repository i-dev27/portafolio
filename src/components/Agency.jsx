import React from "react";
import { makeStyles, Grid, Container } from "@material-ui/core";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  box: {
    marginTop: "200px",
    height: "450px",
  },

  box2: {
    backgroundImage: `url(${"./images/banneragency.png"})`,
    backgroundRepeat: "no-repeat",

    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "450px",
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
              <h2 className="text-agency-intro">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore numquam neque deleniti, eligendi molestias, cumque aut
                quisquam soluta possimus corporis quibusdam amet repellat
                exercitationem dolore voluptate est at perferendis accusamus!
              </h2>
            </Container>
          </Grid>
          <Grid xs={6}>
            <Container className={classes.img}>
              <img
                className="mecoding"
                src="./images/mecoding.png"
                alt="mecoding"
              />
            </Container>
          </Grid>
        </Grid>
      </Container>

      <Paper elevation={0} className={classes.box2}>
        <h1 className="text-agency">
          "We have the best solution for your company"
        </h1>
      </Paper>
    </React.Fragment>
  );
}

export default Agency;
