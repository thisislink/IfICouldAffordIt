import React from 'react';
import '../Layouts/App.css';
import Gallery from '../Components/Gallery';
import About from '../Pages/About';
import {Route, Switch} from 'react-router-dom';
import Error from '../Pages/Error';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <nav>Home | <a href={About}>About</a></nav>
                <header><h1>Hello World</h1></header>
                <main>
                    <Switch>
                        <Route exact path="/" component={Gallery}/>
                        <Route exact path="/about/" component={About}/>
                        <Route component={Error}/>
                    </Switch>

                </main>
                <footer></footer>
            </React.Fragment>
        );
    }
}

export default App;