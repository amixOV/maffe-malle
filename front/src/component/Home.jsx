import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormDialog from '@material-ui/core/FormDialog';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Grid from '@material-ui/core/Grid';
import List from './material-comp/List';

import sendDataToDb from '../function/server/post';
import deleteFromDB from '../function/server/delete';
import editDbItem from '../function/server/edit';

import EditCard from './EditCard';

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 4,
    // textAlign: 'center',
    padding: theme.spacing(5),
    color: theme.palette.text.secondary,
  },
}));

function Home(props) {
  const mongooseModule = 'product_module';
  let fetchData = props.fetchData;
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const sendForm = async () => {
    try {
      if (textValue.length <= 0) {
        return;
      }
      const userName = { product_name: textValue };
      await sendDataToDb(userName, mongooseModule);
    } catch (error) {
      console.error(error);
    }
    fetchData();
  };

  const deleteItem = async (id) => {
    await deleteFromDB(id, mongooseModule);
    fetchData();
  };
  const editItem = async (id, name) => {
    const query = { product_name: name };
    await editDbItem(id, query, mongooseModule);
    fetchData();
  };

  let textValue;
  const handleChange = (e) => {
    let type = e.target.type;
    if (type === 'text') {
      textValue = e.target.value;
    }
    if (type === 'checkbox') {
      console.log('box');
      setState({ ...state, [e.target.name]: e.target.checked });
    }
  };

  
  const [open, setOpen] = useState(false);
  const handleClickOpen = (id) => {
    setOpen(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (id, name) => {
    await editItem(id, name)
    console.log(id, name);
    setOpen(false);
  }
  let users = props.data;
  let UsersList;
  if (users === null) {
    UsersList = () => <h2>loading ..... </h2>;
  } else {
    UsersList = (props) => {
    let handleClickOpen = props.handleClickOpen
      return users.map((user) => {

        return (
          <List
            key={user._id}
            liData={user}
            onDeleteItem={() => deleteItem(user._id)}
            onEditItem={() => handleClickOpen(user._id)}
          />
        );
      });
    };
  }

  return (
    <div>
      <h1>HOME</h1>
      <EditCard open={open} handleClose={handleClose} handleSubmit={handleSubmit}/>
      <Grid className={classes.root} container spacing={0} justify='center'>
        <Grid item xs={6}>
          <UsersList handleClickOpen={handleClickOpen}/>
        </Grid>
        <Grid item xs={6}>
          <form noValidate autoComplete='off'>
            <Grid container spacing={3}>
              <Grid item xs={7}>
                <TextField
                  id='standard-basic'
                  label='name'
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.checkedB}
                      onChange={handleChange}
                      name='checkedB'
                      color='primary'
                    />
                  }
                  label='logged'
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Button
                onClick={() => sendForm()}
                variant='contained'
                color='primary'
                className={classes.button}
                endIcon={<SendIcon />}>
                Send
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
