import * as React from 'react'
import {BrowserRouter, Redirect, Route} from 'react-router-dom'

import {Index} from './components/pages'
import {PostPage} from './components/pages/PostPage'

import {Authentication} from './app/auth/Authentication'
import {Login} from "./components/pages/Login";

const routes = <div>
    <ProtectedRoute exact path="/" component={Index}/>
    <ProtectedRoute exact path="/thread/:id" component={PostPage}/>

    <Route exact path="/login" component={Login}/>
</div>

export class App extends React.Component<any, any> {
    render(): React.ReactNode {
        return (() => {
            return (
                <BrowserRouter>{routes}</BrowserRouter>
            )
        })()
    }
}

function ProtectedRoute({component: Component, ...args}) {
    return (
        <Route
            {...args}
            render={props => Authentication.isAuthenticated()
                ? <Component {...props}/>
                : <Redirect to={`/login`} from={props.location.pathname}/>
            }
        />
    )
}
