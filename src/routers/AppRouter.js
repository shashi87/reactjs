import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFoundPage from './../components/notFoundPage';


import history from './history';
import PublicRoute from './public';
import PrivateRoute from './private';
import Login from '../Pages/login';
import Home from '../Pages/Home';

const AppRouter = () => {
    document.addEventListener('visibilitychange', () => {
        console.log(document.visibilityState, 'test')
        //alert('time',new Date().toTimeString())
        console.log(document.hidden, new Date().toTimeString(), 'test')
    })

    return (
        <BrowserRouter history={history}>
            <Switch>
                <PublicRoute path='/login' component={Login} />
                <PrivateRoute path="/" component={ Home} />
                <Route component={NotFoundPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;