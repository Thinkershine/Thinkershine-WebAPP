import React, { Component } from "react";
import axios from "axios";

const postsApiEndpoint = "https://jsonplaceholder.typicode.com/posts";

class Blog extends Component {
  state = { posts: [] };

  async componentDidMount() {
    const { data: posts } = await axios.get(postsApiEndpoint);
    this.setState({ posts });
  }

  render() {
    console.log(this.state.posts);
    return (
      <div>
        <h2>Posts</h2>
        <ul className="list-group">
          {this.state.posts.map(post => (
            <li key={post.id} className="list-group-item btn">
              <button href="#" className="btn btn-secondary">
                {post.title.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Blog;
