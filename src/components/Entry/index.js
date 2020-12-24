import React from 'react';
import Private from '../Private';

const Entry = (props) => {

  if (props.azure) {
    return <Private loginProvider={1}/>
  }

  // if (okta) {
  //   return <ProtectedRoute loginProvider={2}/>
  // }

  return (
    <div>
      You're not authorized to view this page.
      <br/>
      Please <a href="/login">login</a> first.
    </div>
  );
};

export default Entry;