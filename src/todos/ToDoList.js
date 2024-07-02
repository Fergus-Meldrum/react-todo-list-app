import React, { useEffect } from "react";
import {
  loadTodos,
  removeTodoRequest,
  markTodoAsCompleteRequest,
} from "./thunks";
import styled from "styled-components";
import ToDoListItem from "./ToDoListItem";
import {
  getTodosLoading,
  getCompletedTodos,
  getIncompleteTodos,
} from "./selectors";
import { connect } from "react-redux";
import NewTodoForm from "./NewToDoForm";

const ListWrapper = styled.div`
  max-width: 700px;
  margin: auto;
`;

const ToDoList = ({
  completedTodos,
  incompletedTodos,
  onRemovePressed,
  markAsComplete,
  isLoading,
  startLoadingTodos,
}) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);

  const loadingMessage = <div>Loading todos...</div>;

  const content = (
    <ListWrapper>
      <NewTodoForm />
      <h3>Incomplete:</h3>
      {incompletedTodos.map((todo) => (
        <ToDoListItem
          key={todo.id}
          todo={todo}
          onRemovePressed={onRemovePressed}
          markAsComplete={markAsComplete}
        />
      ))}
      <h3>Completed:</h3>
      {completedTodos.map((todo) => (
        <ToDoListItem
          key={todo.id}
          todo={todo}
          onRemovePressed={onRemovePressed}
          markAsComplete={markAsComplete}
        />
      ))}
    </ListWrapper>
  );

  return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
  isLoading: getTodosLoading(state),
  completedTodos: getCompletedTodos(state),
  incompletedTodos: getIncompleteTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
  markAsComplete: (id) => dispatch(markTodoAsCompleteRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
