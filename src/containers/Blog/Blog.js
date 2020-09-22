import React, { Component } from "react";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";
import Axios from "axios";
//Axios is a third party javascript library for using https requests!!!!

class Blog extends Component {
  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response);
    });
  }

  render() {
    return (
      <div>
        <section className="Posts">
          <Post />
          <Post />
          <Post />
        </section>
        <section>
          <FullPost />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
