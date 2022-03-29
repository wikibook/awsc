import { useRouter } from "blitz";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DialogContentText from "@material-ui/core/DialogContentText";

const useStyles = makeStyles((theme) => ({
  button: {
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));
/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const UserInfo = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        className={classes.button}
        color="primary"
        variant="contained"
        onClick={handleClickOpen}
      >
        로그인
      </Button>
      <Button
        className={classes.button}
        color="default"
        variant="text"
        onClick={handleClickOpen}
      >
        회원 등록
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Information"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {`현재 데이터베이스가 생성되지 않아 실행할 수 없습니다. 계속해서 실습을 진행해 주세요.`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            완료
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
