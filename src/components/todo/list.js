import React, { useContext } from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import Toast from "react-bootstrap/Toast";
import Badge from "react-bootstrap/Badge";
import { PaginationContext } from '../context/pagination';

const TodoList = (props) => {
  const paginationContext = useContext(PaginationContext);
  
  return (
    <ListGroup>
      {paginationContext.items
				.slice(paginationContext.offset, paginationContext.offset + 3)
				.map((item) => (
          <Toast
            action
            className={`toast complete-${item.complete.toString()}`}
            key={item._id}
            onClose={() => props.handleDelete(item._id)}
          >
            <Toast.Header>
              <Badge onClick={() => props.handleComplete(item._id)} style={{padding:"2%",marginRight:"3%"}} pill variant={item.complete ? "danger" : "success"}>{item.complete ? "Completed" : "Pending..."}</Badge>
              <strong className="mr-auto">{item.assignee}</strong>
            </Toast.Header>
            <Toast.Body >
              {item.text}
              <div class="rate">difficulty: {item.difficulty}</div>
            </Toast.Body>
          </Toast>
      ))}
    </ListGroup>
  );
};

export default TodoList;
