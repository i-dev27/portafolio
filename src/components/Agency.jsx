import React from "react";
import { makeStyles, Grid, Container } from "@material-ui/core";
import banneragency from "../public/images/banneragency.png";

const useStyles = makeStyles((theme) => ({
  box: {
    marginTop: "200px",
    height: "450px",
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
              <h2>
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
      <div styles={{ backgroundImage: `url(${banneragency})` }}>
        <h1>This is red car</h1>
      </div>
    </React.Fragment>
  );
}

export default Agency;
