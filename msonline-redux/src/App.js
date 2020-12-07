import React, { Component } from 'react'
import Navbar from './component/Navbar'
import { Route, BrowserRouter,Switch} from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Post from './component/Post'

class App extends Component{
  render() {
    return (
       <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact} />
          <Route path='/:post_id'
            component={Post} />
          </Switch>
         
        </div>
       </BrowserRouter>
       
  );
  }
 
}

export default App;
