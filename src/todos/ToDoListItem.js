import React from "react";
import styled from "styled-components";

const TodoItemContainer = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'createdAt',
})`
  background: #fff;
  border-radius: 8px;
  margin-top: 8px;
  padding: 16px;
  position: relative;
  box-shadow: 0 4px 8px grey;
`;

export const getBorderStyleForDate = (startingDate, currentDate) =>
  startingDate > new Date(currentDate - 8640000 * 5) ? "none" : "2px solid red";

const ToDoItemContainerWithWarning = styled(TodoItemContainer).withConfig({
    shouldForwardProp: (prop) => prop !== 'createdAt',
})`
  border-bottom: ${(props) =>
    getBorderStyleForDate(new Date(props.createdAt), Date.now())};
`;

const ButtonsContainer = styled.div`
  position: absolute;
  right: 12px;
  bottom: 12px;
`;

const Button = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  display: inline-block;
`;

const CompletedButton = styled(Button)`
  background-color: #22ee22;
`;

const RemoveButton = styled(Button)`
  background-color: #ee2222;
  margin-left: 8px;
`;

const ToDoListItem = ({ todo, onRemovePressed, markAsComplete }) => {
  const Container = todo.isCompleted
    ? TodoItemContainer
    : ToDoItemContainerWithWarning;

  return (
    <Container createdAt={todo.createdAt}>
      <h3>{todo.text}</h3>
      <p>
        Created at:&nbsp;
        {new Date(todo.createdAt).toLocaleDateString()}
      </p>
      <ButtonsContainer>
        {todo.isCompleted ? null : (
          <CompletedButton onClick={() => markAsComplete(todo.id)}>
            Mark As Completed
          </CompletedButton>
        )}
        <RemoveButton onClick={() => onRemovePressed(todo.id)}>
          Remove
        </RemoveButton>
      </ButtonsContainer>
    </Container>
  );
};

export default ToDoListItem;
