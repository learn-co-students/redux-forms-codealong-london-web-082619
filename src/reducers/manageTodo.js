export default function manageTodo(state = {
  todos: [],
}, action) {

  console.log("reducer received this action:", action);
  switch(action.type){
    case 'ADD_TODO':
      // return [...state, action.todo] // change code 1 / look at CreateTodo component
      return { todos: state.todos.concat(action.payload.text)} // change code 2 and 3 / look at CreateTodo component

    default:
        return state;
  }
}
