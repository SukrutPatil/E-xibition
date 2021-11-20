import Nav from '@components/nav/Nav'
import SideNav from '@components/sidenav/SideNav'
import React from 'react'


const dashboard = () => {
    return (
        <div>
            <Nav/>
            <h1>Dashboard</h1>
            <div className="s">
                <SideNav/>
            </div>
        </div>
    )
}

export default dashboard
