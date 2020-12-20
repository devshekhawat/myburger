import React, { Component } from 'react';
import { Router, Route, Switch, withRouter, Redirect } from 'react-router-dom';
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
import { SecureRoute, Security, LoginCallback } from '@okta/okta-react';
import { OktaAuth } from '@okta/okta-auth-js';
import config from './config';

const oktaAuth = new OktaAuth({
  issuer: `https://${config.oktaDomain}.com/oauth2/default`,
  clientId: config.okatClientId,
  redirectUri: window.location.origin + '/login/callback'
});

class App extends Component {
  // componentDidMount () {
  //   this.props.onTryAutoSignup();
  // }

  render () {
    let routes = (
      <Router>
      <Security oktaAuth={oktaAuth}>
        <Route path='/' exact={true} component={Home}/>
        <SecureRoute path='/private' component={Private}/>
        <Route path='/login/callback' component={LoginCallback} />
      </Security>
    </Router>
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