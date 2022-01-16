import { FC } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';

// styles
import './App.css';
import { Button } from '@material-ui/core';

const App: FC = (): JSX.Element => {
  return (
    <>
        <Routes>
          <Route path ='/' element={<Home />} />
        </Routes>
    </>
  );
}

const Home: FC = (): JSX.Element => {
  return (
    <>
      <h1>Hockey Scout Application</h1>
      <h3>Sign In Page</h3>
      <p>Basic sign in page no frills</p>
      <h3>Dashboard</h3>
      <p>what does it look like?</p>
      
      <h3>Record a new game</h3>
      <p>Go to a game with 2 teams to judge players</p>
      <p>Add team names, date, league, age group</p>
      <p>Then you can add players info as you see them</p>
      <p>As you add data it will populate players with similar stats so you can compare them to ensure their is consistency</p>
      <Button color='primary' variant='contained'>
        Record A New Game
      </Button>
      <h3>See all data collected</h3>
      <p>Filter by player, team, league, date, age, group, rating etc.</p>
      <p>View individual players and see all of their stats visualized</p>
      <p>Comparison tool between players of similar stats</p>
      <Button color='primary' variant='contained'>
        View Data
      </Button>
    </>
  )
}


export default App;
