import React, { useState } from "react";
import { connect } from "react-redux";
import { getTodos } from "./selectors";
import { addTodoRequest } from "./thunks";
import styled from "styled-components";

const FormConatiner = styled.div`
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 4px 8px grey;
`;

const NewTodoInput = styled.input`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-bottom: 2px solid #ddd;
  border-radius: 8px;
  margin-bottom: 16px;
  width: 90%;
  outline: none;
`;

const NewTodoButton = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  margin-left: 8px;
  width: 20%;
  background-color: #22ee22;
`;

const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [newTodo, setInputValues] = useState({
    todoText: "",
    todoDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <FormConatiner>
      <NewTodoInput
        type="text"
        name="todoText"
        placeholder="Type your new todo here"
        value={newTodo.todoText}
        onChange={handleChange}
      ></NewTodoInput>
      <label htmlFor="dateInput">Select a date:</label>
      <NewTodoInput
        id="dateInput"
        type="date"
        name="todoDate"
        value={newTodo.todoDate}
        onChange={handleChange}
      ></NewTodoInput>
      <NewTodoButton
        onClick={() => {
          const isDuplicateText = todos.some(
            (todo) => todo.text === newTodo.text
          );
          if (!isDuplicateText) {
            onCreatePressed(newTodo);
            setInputValues({
              todoText: "",
              todoDate: "",
            });
          }
        }}
      >
        Create To Do
      </NewTodoButton>
    </FormConatiner>
  );
};

const mapStateToProps = (state) => ({
  todos: getTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (newTodo) => dispatch(addTodoRequest(newTodo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
