import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSiderDrawer: false
    };

    sideDrawerClosedHandler = () => {
        this.setState({ showSiderDrawer: false });
    };

    sideDrawerShowHandler = () => {
        this.setState({ showSiderDrawer: true });
    };

    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerShowHandler} />
                <SideDrawer
                    open={this.state.showSiderDrawer}
                    closed={this.sideDrawerClosedHandler}
                />
                <main className={classes.Content}>{this.props.children}</main>
            </Aux>
        );
    }
}

export default Layout;
