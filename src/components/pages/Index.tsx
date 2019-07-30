import * as React from 'react'

import {Header} from '../modules/Header'
import {Link} from "react-router-dom";
import {Authentication} from "../../app/auth/Authentication";

type Props = {

}

type State = {

}

export class Index extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }

    render() {
        return (
            <div>index</div>
        )
    }
}

