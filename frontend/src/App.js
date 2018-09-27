import React, { Component } from 'react';


// react-router-dom をインポートする
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import List from './List';
import New from './New';
// import Show from './Show';　
import FootBall from './football';　
import Edit from './Edit';
// aws-amplifyの読み込み
import Amplify from 'aws-amplify';
// Reactへの組み込み用HOC
import { withAuthenticator } from 'aws-amplify-react';
import { Auth } from 'aws-amplify';
// AWSリソースの情報読み込み
Amplify.configure({
  Auth: {
      identityPoolId: '', //REQUIRED - Amazon Cognito Identity Pool ID
      region: 'ap-northeast-1', // REQUIRED - Amazon Cognito Region
      userPoolId: '', //OPTIONAL - Amazon Cognito User Pool ID
      userPoolWebClientId: '', //OPTIONAL - Amazon Cognito Web Client ID
  }
});
// let currentUser = this.state
// let user = Auth.currentUserPoolUser();
// user.then((string) => {
//   currentUser = string.username
//   console.log(string.username);
//   }, (error) => {
//   console.error("error", error.message);
// });
const App = () => (
  <Router>
    <div class="chat_box">
      <AppHeader />
      <Switch>
         <Route exact path='/new' component={ New } />
         <Route exact path='/message/:id/edit' component={ Edit }/>
         <Route exact path='/' component={ List }/>
         <Route exact path='/football' component={ FootBall }/>
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
      <Link to="/football">[Foot Ball]</Link>
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

// export default App
export default withAuthenticator(App, { includeGreetings: true });