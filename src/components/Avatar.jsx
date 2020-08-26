import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },

  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function Avatar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar
        alt="Irving Morales"
        src="./public/images/avatar.jpg"
        className={classes.large}
      />
    </div>
  );
}
