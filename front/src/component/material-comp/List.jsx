import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  listIcon: {
    // backgroundColor: theme.palette.background.paper,
    margin: theme.spacing(1, 3, 4),
  },

}));

export default function InteractiveList(props) {
  const classes = useStyles();
  const [dense, setDense] = useState(false);
  const [secondary, setSecondary] = useState(false);
  const name = props.liData.product_name;

  return (
    <div className={classes.root}>
      <div>
        <List dense={dense}>
          <ListItem className={classes.listIcon}>
            <ListItemText
              primary={name}
              secondary={secondary ? 'Secondary text' : null}
            />
            <ListItemSecondaryAction onClick={props.onDeleteItem}>
              <IconButton edge='end' aria-label='delete'>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
            <ListItemSecondaryAction onClick={props.onEditItem}>
              <IconButton aria-label='edit'>
                <EditIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </div>
    </div>
  );
}
