import React from 'react';
import Typography from "@material-ui/core/Typography";
import Input from '@material-ui/core/Input';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

function App() {
  return (
    <React.Fragment><Typography variant="h1" align="center">Todos</Typography>
    <Input placeholder="Add todo" margin="normal"/>
    <List>
          <ListItem dense button>
            <Checkbox
            />
            <ListItemText primary="Check the pre-work"/>
            <ListItemSecondaryAction>
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
    </List>
    </React.Fragment>


    );
}

export default App;
