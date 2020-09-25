import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import {
  Grid,
  Container,
  createMuiTheme,
  ThemeProvider,
  Box,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "50%",
    padding: 0,
    margin: 0,
    display: "block",
    justifyContent: "flexStart",
    backgroundColor: "#d3d3d3",
  },

  margin: {
    margin: theme.spacing(2),
  },

  TextField: {
    width: "36%",
    margin: "10px",
  },

  infoBox: {
    backgroundColor: "grey",
    display: "flex",
    justifyContent: "flexEnd",
    alignItems: "center",
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00a86b",
    },
  },
});

export default function UserForm() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container className={classes.root}>
        <h1>Contact us</h1>
        <Grid>
          <Grid>
            <FormControl className={classes.margin}>
              <InputLabel htmlFor="input-with-icon-adornment">
                Nombre
              </InputLabel>
              <Input
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              />
            </FormControl>
            <TextField
              className={classes.margin}
              id="input-with-icon-textfield"
              label="Email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AlternateEmailIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
        <Grid>
          <TextField
            className={classes.TextField}
            id="outlined-multiline-static"
            label="Comentario"
            multiline
            rows={4}
            variant="outlined"
          />
          <Grid>
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                color="primary"
                endIcon={<Icon>send</Icon>}
              >
                Send
              </Button>
            </ThemeProvider>
          </Grid>
        </Grid>
      </Container>

      <Container className={classes.infoBox}>
        <Grid direction="row" justify="flex-end" alignItems="flex-end">
          <h1>hola</h1>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
