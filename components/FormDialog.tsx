import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

import { useMutation } from "@apollo/react-hooks";
import { ADD_ARTICLES } from "../gql/articles";

interface PropsType {
  open: boolean;
  closeHandler: () => void;
}

const FormDialog = ({ open, closeHandler }: PropsType) => {
  const [article, setArticle] = useState({
    text: '',
    date: new Date
  })
  const [AddArticles] = useMutation(ADD_ARTICLES);

  const submit = async () => {
    await AddArticles();
    closeHandler;
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value
    const cArticle = {...article}
    cArticle.text = text
    setArticle(cArticle);
  };

  return (
    <Dialog open={open} onClose={closeHandler}>
      <DialogTitle id="form-dialog-title">投稿</DialogTitle>
      <DialogContent>
        <TextField
          value={article.text}
          onChange={onChangeHandler}
          autoFocus
          margin="dense"
          label="投稿"
          type="article"
          multiline
          rows={4}
          fullWidth
          placeholder="今日は昨日より何ができるようになりましたか？"
        />
        {/* this is dev code */}
        <p>{article.text}</p>
        <p>{article.date+''}</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeHandler} color="primary">
          Cancel
        </Button>
        <Button onClick={submit} color="primary">
          Subscribe
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FormDialog
