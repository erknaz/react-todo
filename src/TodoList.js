import React from "react";
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoList=props=>{
	const {todos,deleteTodo,toggleCompleted}=props;
		const addListItem=todos.map((todo,index)=>{
	return(
		<ListItem dense button key={index} onClick={()=>toggleCompleted(index)}>
            <Checkbox checked={todo.completed}
            />
            <ListItemText primary={todo.value}/>
            <ListItemSecondaryAction>
              <IconButton onClick={()=>deleteTodo(index)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
	)
})
return	<List>{addListItem}</List>;

};

export default TodoList;



