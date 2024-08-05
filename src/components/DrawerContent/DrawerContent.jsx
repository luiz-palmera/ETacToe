import React from "react"
import styled from "styled-components"
import {
    Box,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemText
} from '@mui/material';




export const DrawerContent = () => {
    return (
        <Box
            sx={{
                width: 250,
            }}
            role="presentation">
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>

                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}