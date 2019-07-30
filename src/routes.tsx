import * as React from 'react'
import {BrowserRouter, Redirect, Route} from 'react-router-dom'

import {Index} from './components/pages/Index'

import {Authentication} from './app/auth/Authentication'

const routes = <div>
    <Route exact path="/" component={Index}/>
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
