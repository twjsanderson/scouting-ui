import React from 'react';

// components
import BasicCard from 'components/card';

// features
import NavBar from 'features/navbar';

// styles
// import { styles } from './styles';
import { withStyles } from '@mui/styles'; 
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const styles = {
    root: {
      flexGrow: 1,
    },
    externalGrid: {
      margin: '1rem'
    },
    internalGrid: {
      color: 'blue'
    },
    paper: {
      padding: '1rem',
      color: 'black',
    },
  };

interface Props {
    classes: {
        root: any;
        externalGrid: any;
        internalGrid: any;
        paper: any;
    }
}

const Dashboard: React.FC<Props> = ({ classes }: Props) => {

    return (
        <>
            <NavBar />
            <div className={classes.root}>
                <Grid className={classes.externalGrid} spacing={3} container>
                    <Grid className={classes.internalGrid} item lg={4} md={4} sm={4} xs={12}>
                        <Paper className={classes.paper}>
                            <Grid className='' item>
                                <Typography>
                                    Thing
                                </Typography>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid className={classes.internalGrid} item lg={7} md={7} sm={7} xs={12}>
                        <Paper className={classes.paper}>
                            <Grid className='' item >
                                <Typography>
                                    Thing2
                                </Typography>
                                <BasicCard />
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </>
    )

}

export default withStyles(styles)(Dashboard);
