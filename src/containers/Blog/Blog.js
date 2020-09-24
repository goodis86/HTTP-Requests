import React, { Component } from "react";


import "./Blog.css";
import axios from '../../Axios';
import Posts from '../Blog/Posts/Posts'
import {Route, Link} from 'react-router-dom'
import NewPost from './NewPost/NewPost'
//import Axios from "axios";
//Axios is a third party javascript library for using https requests!!!!

class Blog extends Component {

  render() {
 return (
      <div className = 'Blog'>

        <header >
            <nav>
              <ul>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to={{pathname: '/new-post' }}>New Post</Link></li>
              </ul>
            </nav>
        </header>
        
    {/* <Route path='/' exact render= {() => <h1>Home</h1>} />
    <Route path='/' exact render= {() => <h1>Home 23</h1>} /> */}
      <Route path = '/' exact component={Posts} />
      <Route path = '/new-post' component={NewPost} />
      </div>
    );
  }
}

export default Blog;
