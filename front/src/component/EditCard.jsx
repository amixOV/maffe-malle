import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog(props) {
  let { open, handleClose, handleSubmit } = props;
  let name;
  let handleEditChange = (e) => {
    name = e.target.value;
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>EDIT</DialogTitle>
        <DialogContent>
          <DialogContentText>edit a customer</DialogContentText>
          <TextField
            onChange={handleEditChange}
            autoFocus
            margin='dense'
            id='name'
            label='name'
            type='text'
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={() => handleSubmit(open, name)} color='primary'>
            send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
