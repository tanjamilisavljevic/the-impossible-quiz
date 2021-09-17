import './App.css';
import Layout from "./Components/Layout";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

function App() {
    return (
    <Router>
        <Link to="/game"><input className="layout" type="submit" id="layout"
                                name="layout"
                                value="START"/>  </Link>
        <Switch>
            <Route path="/game" component={Layout}/>
        </Switch>
    </Router>
    );
}

export default App;
