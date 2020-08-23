import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      position: "absolute",
      bottom: theme.spacing(5),
      right: theme.spacing(2),
    },
  })
);

const AddButton = () => {
  const classes = useStyles();
  return <Fab
    className={classes.fab}
    size="medium"
    aria-label="add"
    color="primary"
  >
    <AddIcon></AddIcon>
  </Fab>
}

export default AddButton
