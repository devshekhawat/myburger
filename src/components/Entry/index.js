import React from 'react';
import Private from '../Private';
import { useOktaAuth } from '@okta/okta-react';

const Entry = (props) => {
  const { authState } = useOktaAuth();

  if (props.azure) {
    return <Private loginProvider={1} accountInfo={props.accountInfo} azureLogout={props.logout} />
  } else if (authState.isAuthenticated) {
    return <Private loginProvider={1} />
  }

  // if (okta) {
  //   return <ProtectedRoute loginProvider={2}/>
  // }

  return (
    <div>
      You're not authorized to view this page.
      <br />
      Please <a href="/login">login</a> first.
    </div>
  );
};

export default Entry;