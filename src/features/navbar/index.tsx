import React from 'react';


// features
import SideDrawer from 'components/drawer';


// styles
import { styles } from './styles';
import { withStyles } from '@mui/styles'; 
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

interface Props {
  classes: {
    root: any;
    menuButton: any;
    title: any;
  }
}


const Navbar: React.FC<Props> = ({ classes }: Props): JSX.Element => {
    const [state, setState] = React.useState(false);

    const toggleDrawer = (): void => setState(!state);

    return (
        <div className={classes.root} style={{ margin: 0 }}>
            <SideDrawer state={state} toggleDrawer={toggleDrawer} />
            <AppBar position="static" style={{ margin: 0 }}>
                <Toolbar>
                    <IconButton onClick={toggleDrawer} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
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

export default withStyles(styles)(Navbar);
