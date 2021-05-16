import React from 'react';
import {ListGroup} from 'react-bootstrap';

const TodoList = (props) =>{

  return (
    
    <ListGroup> 
      {props.list.map(item => (
        <ListGroup.Item
        action
        variant = {item.complete ? 'danger' : 'success'}
          className={`complete-${item.complete.toString()}`}
          key={item._id}
          onClick={() => props.handleComplete(item._id)}
        >
      
             {item.text}
         
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default TodoList;
