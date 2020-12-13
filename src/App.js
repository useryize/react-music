import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

const { lazy, Suspense } = React;
const Find = lazy(() => import('./components/Find'));

const App = () => (
    <BrowserRouter>
        <Suspense fallback={null}>
            <Switch>
                <Route path="/find" component={Find} />
                <Redirect from='/' to='/Find' />
            </Switch>
        </Suspense>
    </BrowserRouter>
)

export default App;
