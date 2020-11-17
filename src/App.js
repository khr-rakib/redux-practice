import './App.css';
import { useSelector, useDispatch } from "react-redux"
import { addPost, getDescrement, getIncrement, getPosts } from './redux/actions/adminAction';
import { useEffect } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Login from './Login';
import PrivateRoute from './PrivateRoute'
import Dashboard from './Dashboard';
import Another from './Another';



function App() {
  const count = useSelector(state => state.admin.counter)
  const posts = useSelector(state => state.admin.posts)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getPosts())
  }, [])

  console.log(posts);

  const newData = {
    title: "this is new title",
    body: "this is a body"
  }

  const addData = () => {
    dispatch(addPost(newData))
  }




  return (
    <div className="App">
      <p>Count: {count}</p>
      <button onClick={() => dispatch(getIncrement())}>Increment</button>
      <button onClick={() => dispatch(getDescrement())}>Descrement</button>

      <hr />
      <button onClick={addData}>Add Data</button>

      <hr />




      <BrowserRouter>
        <Link to='/login'>Login</Link>
        <Link to='/dashboard'>Dashboard</Link>
        <br />
        <Switch>
          <Route exact path="/">
            home
        </Route>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/another" component={Another} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
