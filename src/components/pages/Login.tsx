import * as React from 'react'

import {Header} from '../modules/Header'
import {Sidebar} from "../modules/Sidebar"
import {Authentication} from "../../app/auth/Authentication";
import {RouterProps} from "react-router";

type State = {}

export class Login extends React.Component<RouterProps, State> {
    constructor(props: RouterProps) {
        super(props)
    }

    render() {
        return (
            <div>
                <Header/>
                <Sidebar/>
                <main className="col-sm-9 offset-sm-3 col-md-9 offset-md-3 pt-3">
                    <div className="form-group row">
                        <label htmlFor="inputname" className="col-sm-2 col-form-label">ユーザ名</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="name" id="inputname" placeholder="User"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputpass" className="col-sm-2 col-form-label">パスワード</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" name="password" id="inputpass" placeholder="Password"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputpass" className="col-sm-2 col-form-label">API Token</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="token" id="token" placeholder="token"/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.login.bind(this)}>ログイン</button>
                </main>
            </div>
        )
    }

    login() {
        Authentication.authAsDummy()
        this.props.history.push('/')
    }
}

