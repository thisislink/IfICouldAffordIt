import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Navigation extends React.Component {
    render() {

        return (
            <>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6">
                            If I Could Afford It
                        </Typography>
                        <Button color="inherit" component={Link} to="/">Home</Button> |
                        <Button color="inherit" component={Link} to="/about/">About</Button>
                        
                    </Toolbar>
                </AppBar>
            </>
        );
    }
}

export default Navigation;