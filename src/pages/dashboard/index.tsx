import React from 'react';

// components
// import BasicCard from 'components/card';

// features
import NavBar from 'features/navbar';

// styles
import { styles } from './styles';
import { withStyles } from '@mui/styles'; 
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    textAlign: 'center',
    color: 'blue'
}));

interface Props {
    classes: {
        box: any;
    }
}

const Dashboard: React.FC<Props> = ({ classes }: Props): JSX.Element => {

    return (
        <>
            <NavBar />
            <Box sx={{ flexGrow: 1}} className={classes.box}>
                <Grid container justifyContent="center">
                    {/* CTA */}
                    <Grid item xs={12} sm={5} md={4}>
                        <Grid container justifyContent="center">
                            <Grid item xs={12} sm={12} md={12}>
                                <Paper>
                                    <Item>CTA</Item>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* Apps */}
                    <Grid item xs={12} sm={7} md={8}>
                        <Grid container justifyContent="center">
                            <Grid item xs={12} sm={6} md={5}>
                                <Paper>
                                    <Item>
                                        Record a Game
                                    </Item>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6} md={5}>
                                <Paper>
                                    <Item>Apps Section</Item>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6} md={5}>
                                <Paper>
                                    <Item>Apps Section</Item>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6} md={5}>
                                <Paper>
                                    <Item>Apps Section</Item>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        Array.from(Array(1)).map((_, index) => (
                            <Grid hidden={false} item xs={2} sm={4} md={4} key={index + 34}>
                                <Item>xs=2</Item>
                            </Grid>
                        ))
                    }
                </Grid> */}
            </Box>
        </>
    )

}

export default withStyles(styles)(Dashboard);
