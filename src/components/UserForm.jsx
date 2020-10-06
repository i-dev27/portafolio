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
  backgroundForm: {
    backgroundImage: `url(${"./images/bannerform.png"})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "450px",
    display: "block",
  },

  margin: {
    margin: theme.spacing(2),
  },

  TextField: {
    width: "72%",
    margin: "10px",
    padding: "0",
  },

  button: {
    marginLeft: "16px",
    paddingBottom: "10px",
    paddingLeft: "0",
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
      <Container className={classes.backgroundForm}>
        <Grid container spacing={24}>
          <Grid xs={6}>
            <h1 className="form-title">Contact us</h1>
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

            <TextField
              className={classes.TextField}
              id="outlined-multiline-static"
              label="Comentario"
              multiline
              rows={4}
              variant="outlined"
            />

            <Container className={classes.button}>
              <ThemeProvider theme={theme}>
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<Icon>send</Icon>}
                >
                  Send
                </Button>
              </ThemeProvider>
            </Container>
          </Grid>

          <Grid xs={6}>
            <h2>Social Media</h2>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
