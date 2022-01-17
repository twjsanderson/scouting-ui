import { FC } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// pages
import Login from 'pages/login';

// features
import TemporaryDrawer from 'features/drawer';

// styles
import './App.css';
import { Button } from '@material-ui/core';

const App: FC = (): JSX.Element => {
  return (
    <>
        <Routes>
          <Route path ='/' element={<Login />} />
          <Route path ='/dashboard' element={<Dashboard />} />
        </Routes>
    </>
  );
}


const Dashboard: FC = (): JSX.Element => {
  return (
    <>
      <TemporaryDrawer />
      <h1>Hockey Scout Application</h1>
      <h3>Dashboard</h3>
      <p>what does it look like?</p>
      <p>Navbar</p>
      <ul>
        <li>
          Home
        </li>
        <li>
          Scouting
        </li>
        <ul>
          <li>
            Leagues
          </li>
          <li>
            Teams
          </li>
          <li>
            Games
          </li>
          <li>
            Players
          </li>
        </ul>
        <li>
          Scout Chat
        </li>
        <li>
          Contacts
        </li>
      </ul>
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
      <br />
      <Button
        component={Link}
        to ='/'
        color='primary' 
        variant='contained'
        style={{
          marginTop: 5
        }}
      >
        Back Home
      </Button>
    </>
  )
}


export {
  App,
  Dashboard
}
