import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import TestPage from "./Testing/TestPage";
import {HomeThree} from "./Theme/HomeThree";
import { Provider } from "react-redux";
import store from "./Redux/store";
import HomePage from "./Theme/HomePage";

function App() {
  return (
    <Provider store={store}>
        <div className={'maxw1600 m0a'}>
            <Router>
                <Switch>
                    <Route path={'/'} exact component={HomePage} />
                    <Route path={'/test'} component={TestPage}/>
                    <Route path={'/home'} component={HomeThree}/>
                </Switch>
            </Router>
            {/*<HomeThree/>*/}
        </div>
    </Provider>
  );
}

export default App;
