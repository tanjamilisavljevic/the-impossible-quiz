import './App.css';
import Layout from "./Components/Layout";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Home from "./Components/Home";

function App() {
    return (
        <Router>
            <div className="header">
                <Link to="/game" className='startButton'> START </Link>
                <Switch>
                    <Route path="/game" component={Layout}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
