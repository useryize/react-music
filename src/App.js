import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

const { lazy, Suspense } = React;
const Headers = lazy(() => import('./components/Header'));
const Index = lazy(() => import('./components/List'));

const App = () => (
    <BrowserRouter>
        <Suspense fallback={null}>
            <Switch>
                <Route path="/index" component={Index} />
                <Route path="/head" component={Headers} />
                <Redirect from='/' to='/index' />
            </Switch>
        </Suspense>
    </BrowserRouter>
)

export default App;
