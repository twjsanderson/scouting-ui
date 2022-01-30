import React from 'react';
import { Link } from 'react-router-dom';

// components
// import BasicCard from 'components/card';

// styles
import { styles } from './styles';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(3),
    margin: theme.spacing(2),
    textAlign: 'center',
    color: 'black',
    width: '8rem'
}));

const Dashboard: React.FC = (): JSX.Element => {
    return (
        <>
            {/* <NavBar /> */}
            <Box sx={styles.box}>
                <Grid container justifyContent='center'>
                    {/* CTA */}
                    <Grid item xs={12} sm={5} md={4}>
                        <Paper sx={styles.paper}>
                            <Grid container direction='column'>
                                <Grid item>
                                    {/* <Item sx={styles.heroTitle}> */}
                                        <h3>Organization Name(max char)</h3>
                                    {/* </Item> */}
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    {/* Apps */}
                    <Grid item xs={12} sm={7} md={8}>
                        <Paper sx={styles.paper}>
                            <Grid container direction='row'>
                                <Grid item>
                                    <Item  
                                        sx={styles.actionItem}
                                    >
                                        <Button
                                            component={Link} 
                                            to='/recordgame'
                                        >
                                            Record Game
                                        </Button>
                                    </Item>
                                </Grid>
                                <Grid item>
                                    <Item sx={styles.actionItem}>
                                        <Button
                                            component={Link} 
                                            to='/addplayer'
                                        >
                                            Add Player
                                        </Button>
                                    </Item>
                                </Grid>
                                <Grid item>
                                    <Item sx={styles.actionItem}>
                                        Your Players
                                    </Item>
                                </Grid>
                                <Grid item>
                                    <Item sx={styles.infoItem}>
                                        <Button
                                            component={Link} 
                                            to='/analytics'
                                        >
                                            Analytics
                                        </Button>
                                    </Item>
                                </Grid>
                                <Grid item>
                                    <Item sx={styles.infoItem}>
                                        Reports
                                    </Item>
                                </Grid>
                                <Grid item>
                                    <Item sx={styles.scoutItem}>
                                        Chat
                                    </Item>
                                </Grid>
                                <Grid item>
                                    <Item sx={styles.scoutItem}>
                                        Calendar
                                    </Item>
                                </Grid>
                                <Grid item>
                                    <Item sx={styles.managementItem}>
                                        Scout Management (only admin)
                                    </Item>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Dashboard;
