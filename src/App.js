import React, { Component } from 'react';
import './style/css/App.css';
import store from './store/store'
import {Provider} from 'react-redux'
import PostList from './container/PostList'
import {Switch, Route} from 'react-router-dom'
import About from './component/About'
import Contact from './component/Contact'
import Header from './component/Header'
import Footer from './component/Footer'
import PostDetails from './container/PostDetails'

class App extends Component {
  render() {
    return (
        <Provider store = {store}>

            <div>
                <Header/>
                  <Switch>
                    <Route exact path="/" component={PostList} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/post/:number" component={PostDetails}/>
                  </Switch>
              <Footer/>
            </div>
        </Provider>
    );
  }
}

export default App;
