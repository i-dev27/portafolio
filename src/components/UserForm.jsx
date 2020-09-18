import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(5),
  },
}));

export default function UserForm() {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">Nombre</InputLabel>
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
      
    </div>
  );
}
