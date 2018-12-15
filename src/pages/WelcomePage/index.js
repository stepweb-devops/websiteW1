// eslint-disable-next-line
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import actions from './actions';

class WelcomePage extends Component {
    constructor(props) {
        super(props);

        const {
            beginSession
        } = props;

        beginSession();
    }

    render() {
        return (
            <>
                __COMPANY_NAME__
            </>
        );
    }
}

const mapStateToProps = state => state.session;
const mapDispatchToProps = actions;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(WelcomePage));
