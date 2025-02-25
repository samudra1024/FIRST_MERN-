import * as React from 'react';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import Button from '@mui/joy/Button';
import List from '@mui/joy/List';
import Divider from '@mui/joy/Divider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import { Link } from 'react-router-dom';
import TableView from '../component/TableView'
import CardView from '../component/CardView'

export default function DrawerBasic() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (inOpen) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(inOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Button variant="outlined" color="neutral" onClick={toggleDrawer(true)}>
        Open drawer
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem>
              <ListItemButton component={Link} to={'/books/create'}>
              Create
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton component={Link} to={<CardView/>}>
              Table View
              </ListItemButton>
            </ListItem>
          </List>

        </Box>
      </Drawer>
    </Box>
  );
}
