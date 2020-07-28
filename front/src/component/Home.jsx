import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      // flexGrow: 4,
      // textAlign: 'center',
      padding: theme.spacing(5),
      color: theme.palette.text.secondary,
    },
  },
}));

function Home() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  let textValue;
  const handleChange = (e) => {
    let type = e.target.type;
    if (type === 'text') {
      console.log('text');
      textValue = e.target.value
    }
    if (type === 'checkbox') {
      console.log('box');
      setState({ ...state, [e.target.name]: e.target.checked });
    }

  };
  const classes = useStyles();
  let sendForm = () => {
    console.log(textValue);
  };
  return (
    <div>
      <h1>HOME</h1>
      {/* <Grid container spacing={0}> */}
      <form noValidate autoComplete='off'>
        <Grid className={classes.root} container spacing={0} justify='center'>
          <Grid container spacing={1}>
            <Grid item xs={8}>
              <TextField
                id='standard-basic'
                label='name'
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={1}>
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
          <Grid item xs={6}>
            <Button
              onClick={() => sendForm()}
              variant='contained'
              color='primary'
              className={classes.button}
              endIcon={<SendIcon />}>
              Send
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default Home;
