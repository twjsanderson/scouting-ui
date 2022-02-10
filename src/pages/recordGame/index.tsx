import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useRecoilState } from 'recoil';

// atoms
import { individualGameAtom } from './state';

// styles
import './index.css';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import { DesktopDatePicker as Picker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

const style = {
  width: 500,
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
}

// use is submitting to show Loading indicator
// include optional address field

const RecordGame = () => {
  const [showNew, setShowNew] = React.useState(false);
  const [showUpdate, setShowUpdate] = React.useState(false);

  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');

  const [gameState, setGameState] = useRecoilState(individualGameAtom);
  const navigate = useNavigate();

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
    isSubmitting,
    resetForm 
  } = useFormik({
    initialValues: {
      league: '',
      arena: '',
      date: null,
    },
    onSubmit: values => {
      // setSubmitting(true)
      // setTimeout(() => {
        
      //   setSubmitting(false);
      // }, 1500)
      const id = 1;
      setGameState({
        id: id,
        league: values.league,
        arena: values.arena,
        date: values.date
      })
      navigate(`/recordgame/${id}`);
      // make api call to create new game and then setState with response (id, userId who created it)
    }
  });
  // if isSubmitting disbale fields and buttons, use isSubmitting in forms to show loading icon
  // time limit incase of failure
  console.log(gameState)
  // if (isSubmitting) {
  //   return <h1>Loading...</h1>
  // }
  return (
    <form onSubmit={handleSubmit}>
      <Grid item xs={12} sm={7} md={8} style={{ margin: 'auto', marginTop: '1rem' }}>
        {/* <Paper sx={styles.paper}> */}
        <Paper>
          <Grid container direction='row' style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Grid item className='style' style={{ textAlign: 'center', padding: '1rem' }}>
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
                        onChange={e => setFieldValue('league', e.target.value)}
                      />
                      <Typography variant='subtitle2'>
                        Choose Arena
                      </Typography>
                      <TextField
                        required
                        id='arena'
                        onChange={e => setFieldValue('arena', e.target.value)}
                      />
                      {/* <Autocomplete
                        open={open}
                        onOpen={() => {
                          // only open when in focus and inputValue is not empty
                          if (inputValue) {
                            setOpen(true);
                          }
                        }}
                        onClose={() => setOpen(false)}
                        inputValue={inputValue}
                        onInputChange={(e, value, reason) => {
                          setInputValue(value);

                          // only open when inputValue is not empty after the user typed something
                          if (!value) {
                            setOpen(false);
                          }
                        }}
                        options={['test']}
                        renderInput={(params) => (
                          <TextField {...params} label='Combo box' variant='outlined' />
                        )}
                      /> */}
                      <Typography variant='subtitle2'>
                        Game Date
                      </Typography>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Picker 
                          inputFormat='MM/dd/yyyy'
                          value={values.date}
                          onChange={(val) => setFieldValue('date', val)}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                      <br />
                      <Button
                        sx={{ margin: '1rem' }}
                        type='submit'
                        color='primary' 
                        variant='contained'
                      >
                        Record New Game
                      </Button>
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