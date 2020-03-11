import React from 'react';
import Grid from '@material-ui/core/Grid';
import '../Layouts/App.css';
import Navigation from '../Components/Navigation';
import HeaderMain from '../Components/HeaderMain';
import Gallery from '../Components/Gallery';
import About from '../Pages/About';
import { Route, Switch } from 'react-router-dom';
import Error from '../Pages/Error';
import 'typeface-roboto';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navigation />
                <HeaderMain />
                <Grid
                    container
                    spacing={10}
                    style={{
                        padding: '24px',
                        margin: '10px'
                    }}
                >
                    <Switch>
                        <Route exact path="/" component={Gallery} />
                        <Route exact path="/about/" component={About} />
                        <Route component={Error} />
                        <Grid
                            item
                            xs={12} sm={6} md={4} lg={4} xl={3}
                        >
                        </Grid>
                
                </Switch>
                </Grid>
                <footer></footer>
            </React.Fragment>
        );
    }
}

export default App;