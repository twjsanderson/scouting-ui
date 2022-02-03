import React from 'react';
import { useFormik } from 'formik';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// styles
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


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
    setFieldValue,
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
  console.log(values)

  return (
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
                          <Typography variant='subtitle2'>
                            Choose League
                          </Typography>
                          <TextField
                            required
                            id='league'
                            label='League'
                            onChange={(val) => setFieldValue('league', val)}
                          />
                          <Typography variant='subtitle2'>
                            Choose Arena
                          </Typography>
                          <TextField
                            required
                            id='arena'
                            label='Arena'
                            onChange={(val) => setFieldValue('arena', val)}
                          />
                          <Typography variant='subtitle2'>
                            Game Date
                          </Typography>
                          <DatePicker
                            name='date'
                            selected={(values.date && new Date(values.date)) || null}
                            onChange={(val) => setFieldValue('date', val)}
                          />
                        </>
                      )
                    }
                    {
                      showUpdate && (
                        <> 
                          <Typography variant='subtitle1'>
                            Find Game
                          </Typography>
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
  );
};

export default RecordGame;