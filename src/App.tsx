import { AppBar, Button, Container, Stack, TextField, Toolbar, Typography } from "@mui/material"
import TodoItem from "./components/TodoItem"
import { useEffect, useState } from "react"
import { getTodos, saveTodos } from "./utils/todos"

const App = () => {

  //TODO ARRAY
  const [todos, setTodos] = useState<TodoItemType[]>(getTodos());

  //TITLE
  const [title, setTitle] = useState<TodoItemType['title']>('')

  //USE EFFECT TO ADD INTO LOCAL
  useEffect(() => {

    //ADD INTO LOCAL STORAGE FUNC
    saveTodos(todos)
  }, [todos]);


  //MARK AS COMPLETED TODO HANDLER
  const completeHandler = (id: TodoItemType['id']): void => {
    const newTodos: TodoItemType[] = todos.map((i) => {
      if (i.id === id) i.isCompleted = !i.isCompleted;

      return i;
    })
    setTodos(newTodos)
  }


  //EDIT TODO HANDLER
  const editHandler = (id: TodoItemType['id'], newTitle: TodoItemType['title']): void => {
    const newTodos: TodoItemType[] = todos.map((i) => {
      if (i.id === id) i.title = newTitle;

      return i;
    })
    setTodos(newTodos)
  }

  //DELETE TODO HANDLER
  const deleteHandler = (id: TodoItemType['id']): void => {
    const newTodos: TodoItemType[] = todos.filter(i => i.id != id)
    setTodos(newTodos)
  }

  //SUBMIT TODO HANDLER
  const submitHandler = (): void => {
    const newTodo: TodoItemType = {
      id: String(Math.round(Math.random() * 1000)),
      title,
      isCompleted: false
    };

    setTodos(prev => [...prev, newTodo]);
    setTitle('')
  }

  return (
    <Container maxWidth='sm' sx={{ height: '100vh' }}>

      {/* NAVBAR */}
      <AppBar position="static">
        <Toolbar>
          <Typography>
            To-Do App
          </Typography>
        </Toolbar>
      </AppBar>


      {/* TODO CONTAINER  */}
      <Stack
        p={'1rem'}
        height={'70%'}
        direction={'column'}
        spacing={'1rem'}>

        {
          //TODO COMPONENT
          todos.map((i) => <TodoItem
            key={i.id}
            completeHandler={completeHandler}
            deleteHandler={deleteHandler}
            editHandler={editHandler}
            todo={i} />
          )
        }
      </Stack>

      {/* TODO INPUT  */}
      <TextField
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        label={'New Task'}
        onKeyDown={(e) => (e.key === 'Enter' && title != '') && submitHandler()}
      />

      <Button
        onClick={submitHandler}
        disabled={title === ''}
        variant="contained"
        fullWidth
        sx={{ margin: '1rem 0' }}>
        Add
      </Button>

    </Container>
  )
}

export default App