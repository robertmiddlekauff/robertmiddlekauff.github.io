import { List, ListItem } from '@mui/material';
import React from 'react';

const BulletedList = ({ list }: { list: string[] }) => {
  return (
    <List sx={{ listStyleType: 'disc', pl: 5, ml: 2 }}>
      {list.map((list) => (
        <ListItem key={list} sx={{ display: 'list-item', pl: 1 }}>
          {' '}
          {list}{' '}
        </ListItem>
      ))}
    </List>
  );
};

export default BulletedList;
