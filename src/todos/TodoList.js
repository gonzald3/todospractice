import React from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import { removeTodo } from './actions';
import NewTodoForm from './NewTodoForm';

const TodoList = ({ todos = [], onRemovedPressed }) => (
    <div className='list-wrapper'>
        <NewTodoForm />
        {todos.map(todo => <TodoListItem todo={todo} onRemovedPressed={onRemovedPressed} /> )}
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovedPressed: text => dispatch(removeTodo(text)),

})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);