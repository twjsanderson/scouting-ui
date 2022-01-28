import React from 'react';

// components
// import BasicCard from 'components/card';

// features
import NavBar from 'features/navbar';

// styles
import { styles } from './styles';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

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
            <NavBar />
            <Box sx={styles.box}>
                <Grid container justifyContent='center'>
                    {/* CTA */}
                    <Grid item xs={12} sm={5} md={4}>
                        <Paper sx={styles.paper}>
                            <Grid container direction='column'>
                                <Grid item>
                                    <Item>
                                        DISPLAY CONTAINER
                                    </Item>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    {/* Apps */}
                    <Grid item xs={12} sm={7} md={8}>
                        <Paper sx={styles.paper}>
                            <Grid container direction='row'>
                                <Grid item>
                                    <Item sx={styles.actionItem}>
                                        Record Game
                                    </Item>
                                </Grid>
                                <Grid item>
                                    <Item sx={styles.actionItem}>
                                        Add Player
                                    </Item>
                                </Grid>
                                <Grid item>
                                    <Item sx={styles.infoItem}>
                                        Games
                                    </Item>
                                </Grid>
                                <Grid item>
                                    <Item sx={styles.infoItem}>
                                        Leagues
                                    </Item>
                                </Grid>
                                <Grid item>
                                    <Item sx={styles.infoItem}>
                                        Teams
                                    </Item>
                                </Grid>
                                <Grid item>
                                    <Item sx={styles.infoItem}>
                                        Players
                                    </Item>
                                </Grid>
                                <Grid item>
                                    <Item sx={styles.scoutItem}>
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
                                        Scout Management
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
