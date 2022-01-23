import React from 'react';


// features
import SideDrawer from 'features/drawer';


// styles
import { withStyles } from '@mui/styles'; 
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: '1rem'
  },
  title: {
    flexGrow: 1,
  }
};

interface Props {
  classes: {
    root: any;
    menuButton: any;
    title: any;
  }
}


const NavBar: React.FC<Props> = ({ classes }: Props) => {

    const [state, setState] = React.useState(false);

    const toggleDrawer = (): void => setState(!state);

    return (
        <div className={classes.root} style={{ margin: 0 }}>
            <SideDrawer state={state} toggleDrawer={toggleDrawer} />
            <AppBar position="static" style={{ margin: 0 }}>
                <Toolbar>
                    <IconButton onClick={toggleDrawer} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        {/* <MenuIcon /> */}
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        ProScout
                    </Typography>
                    <Button color="inherit">Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default withStyles(styles)(NavBar);
