import styles from './App.module.css';
import { HomePage, Login, Register, DetailPage } from './pages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/detail/:touristRouteId" component={DetailPage} />
          <Route render={() => <h1>404 Page Not Found</h1>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
