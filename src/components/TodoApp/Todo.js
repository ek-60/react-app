import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



function TodoApp() {
  const [todo, setTodo] = useState({description: '', date: ''});
  const [todos, setTodos] = useState([]);

  // OTTAA TALTEEN KÄYTTÄJÄN SYÖTTÄMÄN INPUTIN
  const intputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }
 
  // LISÄÄ TODON
  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo({description: '', date: ''});
  }

  // POISTA TODON
  const deleteTodo = (row) => {
    setTodos(todos.filter((todo, index) => index !== row));
  }

  

  return (
    <div className="todo">
      <Container>
        <Row>
          <Col sm>
            <TextField
            style={{padding: 10}}
            label="Description"
            name='description'
            value={todo.description}
            onChange={intputChanged}/>
          </Col>
          <Col sm>
            <TextField
            style={{margin: 10}}
            label="Date"
            name='date'
            value={todo.date}
            onChange={intputChanged}/>
          </Col>
          <Col sm>
            <Button
            style={{margin: 20}}
            title="Add"
            color="primary"
            variant="outlined"
            onClick={addTodo}>
              <SaveIcon />
              Add
            </Button>
          </Col>
        </Row>
      </Container>
      <table>
        <tbody>
          {
            todos.map((todo, index) =>
            <tr key={index}>
              <td>{todo.description}</td>
              <td>{todo.date}</td>
              <td>
                <IconButton title="Delete" onClick={() => deleteTodo(index)}><DeleteIcon /></IconButton>
              </td>
            </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default TodoApp; 