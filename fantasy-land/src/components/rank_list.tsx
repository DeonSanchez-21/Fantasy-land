import { Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'

const Rank_list = () => {
  return (
    <List>
        <ListItem
            secondaryAction={
            <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
            </IconButton>
            }
        >
            <ListItemAvatar>
            <Avatar>
                <FolderIcon />
            </Avatar>
            </ListItemAvatar>
            <ListItemText
            primary="Single-line item"
            secondary={'Secondary text' }
            />
        </ListItem>
    </List>
  )
}

export default Rank_list