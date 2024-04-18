
//FUNCTION TO STORE IN LOCAL
export const saveTodos = (todos: TodoItemType[]): void => {
    localStorage.setItem('mytodos', JSON.stringify(todos));
}


// FUNCTION TO GET TODOS FROM LOCAL
export const getTodos = (): TodoItemType[] => {
    const todos = localStorage.getItem('mytodos');
    return todos ? JSON.parse(todos) : []
}