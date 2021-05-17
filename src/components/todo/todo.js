import React, { useEffect} from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import TodoForm from "./form.js";
import TodoList from "./list.js";
import useAjax from '../../hooks/axios';
import "./todo.scss";

const ToDo = () => {
  const [list, _addItem, _toggleComplete, _getTodoItems, _deleteTask]= useAjax();
  
  useEffect(_getTodoItems, []);

  useEffect(() => {
    document.title =
      "To DO- complete: " +
      list.filter((item) => !item.complete).length +
      "/" +
      "Incomplete: " +
      list.filter((item) => item.complete).length;
  });

  return (
    <div className="form-container">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          There are {list.filter((item) => !item.complete).length} Items To
          Complete
        </Navbar.Brand>
      </Navbar>
      <br></br>
      <Container fluid="md">
        <Row>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <TodoForm handleSubmit={_addItem} />
            </Card.Body>
          </Card>

          <Col sm={7} className="list-item">
            <TodoList list={list} handleComplete={_toggleComplete}  handleDelete ={_deleteTask}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ToDo;