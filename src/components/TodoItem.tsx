import { Box, Button, Checkbox, Paper, Stack, TextField, Typography } from "@mui/material"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useState } from "react";

type PropsType = {
    todo: TodoItemType,
    completeHandler: (id: TodoItemType['id']) => void,
    deleteHandler: (id: TodoItemType['id']) => void,
    editHandler: (id: TodoItemType['id'], newTitle: TodoItemType['title']) => void,
}
const TodoItem = ({ todo, completeHandler, deleteHandler, editHandler }: PropsType) => {
    const [editActive, setEditActive] = useState<Boolean>(false)
    const [textVal, setTextVal] = useState<string>(todo.title)

    return (
        <Paper sx={
            {
                padding: '1rem'
            }}>

            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                {
                    editActive ?
                        <TextField
                            value={textVal}
                            onChange={(e) => setTextVal(e.target.value)}
                            onKeyDown={(e) => {

                                if (e.key === 'Enter' && textVal != '') {
                                    editHandler(todo.id, textVal);
                                    setEditActive(false)
                                }
                            }
                            } />
                        :
                        <Typography fontSize={'1rem'} mr={'auto'}>
                            {todo.title}
                        </Typography>
                }
                <Box>

                    <Checkbox disabled={editActive && true} checked={todo.isCompleted} onClick={() => completeHandler(todo.id)} color="success" />
                    <Button disabled={editActive && true} onClick={() => deleteHandler(todo.id)} color="inherit"><DeleteForeverIcon /></Button>
                    <Button onClick={() => setEditActive((p) => !p)} sx={{ alignSelf: 'right' }} color="secondary">{editActive ? 'Done' : 'Edit'}</Button>
                </Box>
            </Stack>
        </Paper>
    )
}

export default TodoItem