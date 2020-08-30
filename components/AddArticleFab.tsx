import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

interface PropsType {
  openHandler: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      position: "absolute",
      bottom: theme.spacing(5),
      right: theme.spacing(2),
    },
  })
);

const AddButton = ({ openHandler }: PropsType) => {
  const classes = useStyles();
  return (
    <div onClick={openHandler}>
      <Fab
        className={classes.fab}
        size="medium"
        aria-label="add"
        color="primary"
      >
        <AddIcon></AddIcon>
      </Fab>
    </div>
  );
};

export default AddButton
