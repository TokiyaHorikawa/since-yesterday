import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

interface PropsType {
  open: boolean;
  closeHandler: () => void;
}

const FormDialog = ({ open, closeHandler }: PropsType) => {
  return (
    <Dialog open={open} onClose={closeHandler}>
      <DialogTitle id="form-dialog-title">投稿</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="投稿"
          type="article"
          multiline
          rows={4}
          fullWidth
          defaultValue="今日は昨日より、"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={closeHandler} color="primary">
          Cancel
        </Button>
        <Button onClick={closeHandler} color="primary">
          Subscribe
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FormDialog
