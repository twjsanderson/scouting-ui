import { FC } from 'react';
import { Link } from 'react-router-dom';

// styles
import { Button } from '@material-ui/core';


const Login: FC = (): JSX.Element => {
    return (
        <>
            <h1>ProScout</h1>   
            <p>email</p>
            <p>password</p>
            <p>password reset</p>
            <p>Technical issues</p>
            <Button
                component={Link}
                to='/Dashboard'
                color='primary' 
                variant='contained'
            >
                Login
            </Button>
        </>
    )
}

export default Login;