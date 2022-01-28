import React from 'react';

// styles
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';

interface Props {
  state: boolean;
  toggleDrawer: Function;
}

const SideDrawer: React.FC<Props> = ({ state, toggleDrawer }: Props): JSX.Element => {

  const list = (): JSX.Element => (
    <Box
      role='presentation'
      onClick={() => toggleDrawer()}
      onKeyDown={() => toggleDrawer()}
    >
      <List>
        {['Profile', 'Calendar'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Settings', 'Billing', 'Support'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Drawer
        open={state}
        onClose={() => toggleDrawer()}
      >
        {list()}
      </Drawer>
    </>
  );
};

export default SideDrawer; 
