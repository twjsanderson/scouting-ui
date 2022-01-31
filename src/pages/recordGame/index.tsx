import React from 'react';
import { useFormik } from 'formik';

// styles
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';


interface Values {
  league: string;
  arena: string;
}

// use is submitting to show Loading indicator
// include optional address field

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

  const { 
    values,
    handleSubmit,
    handleChange,
    setSubmitting,
    resetForm 
  } = useFormik({
    initialValues: {
      league: '',
      arena: '',
      date: null,
    },
    onSubmit: values => {
      console.log(values)
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
        resetForm();
      }, 1000);
    }
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <form onSubmit={handleSubmit}>
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
                        <>
                          {/* <Typography variant='subtitle2'>
                            Choose League
                          </Typography>
                          <Field
                            component={TextField}
                            required
                            id='league'
                            label='League'
                          />
                          <Typography variant='subtitle2'>
                            Choose Arena
                          </Typography>
                          <Field
                            component={TextField}
                            required
                            id='arena'
                            label='Arena'
                          /> */}
                          <Typography variant='subtitle2'>
                            Game Date
                          </Typography>
                         
                        </>
                      )
                    }
                    {
                      showUpdate && (
                        <> 
                        <Typography variant='subtitle1'>
                          Find Game
                        </Typography>
                        <Stack spacing={3}>
                        <DatePicker
                          label="Date&Time picker"
                          value={values.date}
                          onChange={handleChange}
                          renderInput={(params: any) => {
                            console.log(params)
                            return <TextField />
                          }}
                        />
                        </Stack>
                        </>
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
        </form>
        </LocalizationProvider>
  );
};

export default RecordGame;