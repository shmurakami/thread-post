import * as React from 'react'
import {Link} from "react-router-dom";

type SidebarProps = {
}

type SidebarState = {
}

export class Sidebar extends React.Component<SidebarProps, SidebarState> {
    constructor(props: SidebarProps) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <div>sidebar</div>
        )
    }
}
