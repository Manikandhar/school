import React, { Component } from 'react';

class unauthorised extends Component {
    render() {
        return (
            <div class="row">
                <h2>Access Denied</h2>
                <h4>Unauthorised request</h4>
            </div>
        );
    }
}

export { unauthorised };