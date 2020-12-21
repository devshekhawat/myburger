import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';

// import Layout from './hoc/Layout/Layout';
// import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
// import Checkout from './containers/Checkout/Checkout';
// import Orders from './containers/Orders/Orders';
// import Auth from './containers/Auth/Auth';
// import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';
import ProtectedRoute from './components/ProtectedRoute/index';
import Home from './components/Home';
import Private from './components/Private';
import Login from './components/Login';
// import { useOktaAuth } from '@okta/okta-react';
import { SecureRoute, Security, LoginCallback } from '@okta/okta-react';
import config from './config';


class App extends Component {
  // componentDidMount () {
  //   this.props.onTryAutoSignup();
  // }

  render() {
    // const { authState } = useOktaAuth();

    let routes = (
      <Router>
        <Security {...config.oidc}>
          <Route path='/' exact={true} component={Home} />
          {/* {!authState.isPending && !authState.isAuthenticated && */}
          <Route path='/login' component={Login} />

          <SecureRoute path='/private' component={Private} />
          <Route path='/login/callback' component={LoginCallback} />
        </Security>
      </Router >
    );

    // if ( this.props.isAuthenticated ) {
    //   routes = (
    //     <Switch>
    //       <Route path="/checkout" component={Checkout} />
    //       <Route path="/orders" component={Orders} />
    //       <Route path="/logout" component={Logout} />
    //       <Route path="/" exact component={BurgerBuilder} />
    //       <Redirect to="/" />
    //     </Switch>
    //   );
    // }

    return (
      <div>
        {/* <Layout> */}
        {routes}
        {/* </Layout> */}
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     isAuthenticated: state.auth.token !== null
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onTryAutoSignup: () => dispatch( actions.authCheckState() )
//   };
// };

// export default withRouter( connect( mapStateToProps, mapDispatchToProps )( App ) );
export default App;