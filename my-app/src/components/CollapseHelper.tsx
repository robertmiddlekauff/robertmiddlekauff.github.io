import React, { useState } from 'react';
import { Button, Collapse, Card } from '@mui/material';

const CollapseHelper = ({children}: {children: JSX.Element}) => {
    const [open, setOpen] = useState(false)
    const toggleCollapse = () => {
        setOpen(!open)
    }
    const expandText = open ? 'Collapse article' : 'Expand article'
    return (
            <Card>
    <Collapse collapsedSize='300px' in={open} timeout='auto' >
        { children }

        </Collapse>
                <Button sx={{m: 3}} onClick={toggleCollapse}>{expandText}</Button></Card>)
}

export default CollapseHelper;