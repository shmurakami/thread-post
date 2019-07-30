import * as React from 'react'
import {Link} from 'react-router-dom'
import {Authentication} from "../../app/auth/Authentication";

type HeaderProps = {
}

type HeaderState = {
}

export class Header extends React.Component<HeaderProps, HeaderState> {

    private isAuthenticated: boolean

    constructor(props: HeaderProps) {
        super(props)

        this.isAuthenticated = Authentication.isAuthenticated()
    }

    render(): React.ReactNode {
        return (
            <div>header</div>
        )
    }

}

