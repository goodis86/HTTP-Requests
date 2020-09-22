import React, { Component } from "react";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";
import Axios from "axios";
//Axios is a third party javascript library for using https requests!!!!

class Blog extends Component {

    state = {
        posts:[],
        selectedPostId: null
    }

  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        const posts = response.data.slice(0,4);
        const updatedPosts = posts.map(post =>{
            return {
                ...post,
                author: 'Phil'
            }
        })
        this.setState({posts: updatedPosts});
        //console.log(response);
    });
  }

  postClickedHandler = (id) => {
    this.setState({selectedPostId: id})
  }

  render() {

    const posts = this.state.posts.map(post => {
        return <Post 
        key = {post.id} 
        title = {post.title}
        author = {post.author}
        clicked = {() => this.postClickedHandler(post.id)}/>
    }

    );
    return (
      <div>
        <section className="Posts">
         {posts}
        </section>
        <section>
          <FullPost id = {this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
