import React from 'react';
import {Button,Form} from 'react-bootstrap';
import useForm from '../../hooks/form';

const TodoForm = (props) => {
//eslint-disable-next-line no-unused-vars
  const [item, handleInputChange, handleSubmit] = useForm(props);
  return (
    <>
      <h3>Add Item</h3>
      <form onSubmit={handleSubmit}>
      <Form.Group> 
      <Form.Label> 
          <span>To Do Item</span>
          <input
            name="text"
            placeholder="Add To Do List Item"
            onChange={handleInputChange}
          />
        </Form.Label>
        <Form.Label> 
          <span>Difficulty Rating</span>
          <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
          </Form.Label>
        <Form.Label> 
          <span>Assigned To</span>
          <input type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
        </Form.Label>
        <Button  variant="primary" type="submit" >Add Item</Button>
        </Form.Group>
      </form>
    </>
  );

}

export default TodoForm;
