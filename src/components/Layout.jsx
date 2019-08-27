import React, { Component } from 'react';
import { NavMenu, SideMenu } from '../components';
import { authenticationService } from '../services';

class Layout extends Component {

    render() {
        return (
            <div>
                <NavMenu />
                <div class="container-fluid">
                    <div class="row">
                        {authenticationService.currentUserValue && <SideMenu />}
                        <main role="main" class={authenticationService.currentUserValue ? "col-md-9 ml-sm-auto col-lg-10 px-4 py-3" : "col-md-12 col-lg-12 px-4 py-3"}>
                            {this.props.children}
                        </main>
                    </div>

                </div>
            </div>
        );
    }
}

export { Layout };