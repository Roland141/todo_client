import { Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { EditTodo } from './EditTodo';
import { QueryClient, useQueryClient } from '@tanstack/react-query';
import { delTodo, updateCompleted } from '../utils';
export const Todo = ({id,task,completed}) => {
  const [open, setOpen] = React.useState(false);
  const queryClient = useQueryClient()

    const handleDelete =async ()=>{
        await delTodo(id)
        queryClient.invalidateQueries('todos')
    }
    const handleDone=async ()=>{
       await updateCompleted(id)
       queryClient.invalidateQueries('todos')
        
    }
    const handleEdit=()=>{
      setOpen(true)
    }
  return (
    <div>
      <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon sx={{color:completed?"green":"gray"}}>
                <DoneIcon onClick={handleDone}/>
              </ListItemIcon>

              <ListItemText primary={task} sx={{textDecoration:completed?"line-through":"none"}}/>
            </ListItemButton >

            <ListItemIcon sx={{color:"red"}}>
                <DeleteIcon onClick={handleDelete}/>
              </ListItemIcon>

              <ListItemIcon sx={{color:"blue"}}>
                <EditIcon onClick={handleEdit}/>
              </ListItemIcon>
          </ListItem>
          
          <Divider/>
          {open && <EditTodo open={open} setOpen={setOpen} id={id} task={task}/>}
    </div>
  )
}

