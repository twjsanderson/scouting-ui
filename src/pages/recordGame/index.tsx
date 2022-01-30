import React from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';

// styles
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

// use is submitting to show Loading indicator

const RecordGame = () => {
  const [showNew, setShowNew] = React.useState(false);
  const [showUpdate, setShowUpdate] = React.useState(false);

  const handleShowNew = () => {
    setShowUpdate(false);
    setShowNew(!showNew);
  };

  const handleShowUpdate = () => {
    setShowNew(false);
    setShowUpdate(!showUpdate);
  };

    return (
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        enableReinitialize={true}
        onSubmit={(
          values: Values,
          { setSubmitting, resetForm }: FormikHelpers<Values>
        ) => {
          console.log(values)
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            resetForm();
          }, 1000);
        }}
      >
        {props => (
          <Form>
            <Grid item xs={12} sm={7} md={8}>
              {/* <Paper sx={styles.paper}> */}
              <Paper>
                <Grid container direction='row'>
                    <Grid item>
                      <Typography variant='subtitle1'>
                        Would you like to record a new game or update a saved game?
                      </Typography>
                      <Button 
                        sx={{ margin: '0.5rem' }}
                        onClick={handleShowNew}
                        color='success' 
                        variant='contained'
                      >
                        New Game
                      </Button>
                      <Button 
                        sx={{ margin: '0.5rem' }}
                        onClick={handleShowUpdate}
                        color='primary' 
                        variant='contained'
                      >
                        Update Game
                      </Button>
                      {
                        showNew && (
                          <Typography variant='subtitle1'>
                            League, arena, address, date
                          </Typography>
                        )
                      }
                      {
                        showUpdate && ( 
                          <Typography variant='subtitle1'>
                            Find Game
                          </Typography>
                        )
                      }           
                      {/* <Button
                        color='info'
                        variant='contained'
                        type='submit'
                      >
                        Submit
                      </Button> */}
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>

            { props.isSubmitting ? <p>loading</p> : null }
          </Form>
        )}
    </Formik>
  );
};

export default RecordGame;