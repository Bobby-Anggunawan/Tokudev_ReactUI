import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import BlogPost from './templates/blog_post';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Notes />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/blog_post">
          <BlogPost/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
