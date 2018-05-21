import React, { Component } from 'react';


// react-router-dom をインポートする
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import List from './List';
import New from './New';
// import Show from './Show';　
import Edit from './Edit';
// aws-amplifyの読み込み
// import Amplify from 'aws-amplify';
// // Reactへの組み込み用HOC
// import { withAuthenticator } from 'aws-amplify-react';
// // AWSリソースの情報読み込み
// Amplify.configure({
//   Auth: {
//       identityPoolId: 'ap-northeast-1:c62540ce-1a9b-4409-9731-63d9c533359a7', //REQUIRED - Amazon Cognito Identity Pool ID
//       region: 'ap-northeast-1', // REQUIRED - Amazon Cognito Region
//       userPoolId: 'ap-northeast-1_nvEdDdmWd', //OPTIONAL - Amazon Cognito User Pool ID
//       userPoolWebClientId: '6854co9l5haqmsoj9q3sti0jup', //OPTIONAL - Amazon Cognito Web Client ID
//       // identityPoolId: identity_pool_id,
//       // region: region,
//       // userPoolId: user_pool_id,
//       // userPoolWebClientId: client_id,
//   }
// });

const App = () => (
  <Router>
    <div>
      <AppHeader />
      <Switch>
         <Route exact path='/new' component={ New } />
         <Route exact path='/message/:id/edit' component={ Edit }/>
         <Route exact path='/' component={ List }/>
       </Switch>
      <AppFooter />
    </div>
  </Router>
)

const AppHeader = () => (
  <div>
    <h3>Message App</h3>
    <p>
      <Link to="/">[Home]</Link>
      <Link to="/new">[New Message]</Link>
    </p>
  </div>
)

const AppFooter = () => (
  <div>
    <p>
      Message App Footer
    </p>
  </div>
)

export default App
// export default withAuthenticator(App, { includeGreetings: true });