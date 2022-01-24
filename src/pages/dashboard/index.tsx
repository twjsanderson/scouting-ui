import React from 'react';

// components
// import BasicCard from 'components/card';

// features
import NavBar from 'features/navbar';

// styles
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    margin: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Dashboard: React.FC = () => {

    return (
        <>
            <NavBar />
            <Box sx={{ flexGrow: 1 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }} spacing={{ xs: 2, sm: 1, md: 1 }} columns={{ xs: 4, sm: 12, md: 12 }}>
                    <Grid item xs={3} sm={4} md={4}>
                        <Item>big</Item>
                    </Grid>
                    <Grid item xs={3} sm={8} md={8}>
                        <Item>big</Item>
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

export default Dashboard;
