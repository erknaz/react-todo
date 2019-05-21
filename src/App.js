import React from 'react';
import TodoList from './TodoList.js';
import TodoForm from './TodoForm.js';
import Typography from "@material-ui/core/Typography";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      value:"",
      todos:[]
    };
  }
  updateValue=e=>{
    this.setState({
      value:e.target.value
    })
    console.log(this.state.value);
  }
  saveTodo=()=>{
    const todos=this.state.todos;
    todos.push({
      value:this.state.value,
      completed:false
    });
    this.clearValue();
    this.setState({
      todos
    });
  };
  clearValue=()=>{
    this.setState({
      value:""
    });
  }
  deleteTodo=index=>{
    const todos=this.state.todos;
    todos.splice(index,1);
    this.setState({
      value:""
    });
  }
  toggleCompleted=(index)=>{
    const todos=this.state.todos;
    todos[index].completed ^= true;
    this.setState({todos});
  }
  render(){
    return (
    <React.Fragment>
    <Typography variant="h1" align="center">Todos</Typography>
    <TodoForm
    onChange={this.updateValue} 
    value={this.state.value} 
    saveTodo={this.saveTodo}
    />
    <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} toggleCompleted={this.toggleCompleted}/>
    </React.Fragment>
    );
  }
}

export default App;
