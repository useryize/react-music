import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const { lazy, Suspense } = React;
const Find = lazy(() => import('./pages/Find'));
const Home = lazy(() => import('./pages/Home'));

const App = () => (
    <BrowserRouter>
        <Suspense fallback={null}>
            <Switch>
                <Route path="/find" component={Find} />
                <Route path="/home" component={Home} />
                <Route path="/" component={Find} />
                {/* <Redirect from='/' to='/find' /> */}
            </Switch>
        </Suspense>
    </BrowserRouter>
)

export default App;
