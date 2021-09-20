import React from "react";
import { connect } from "react-redux";
import { fetchPostsandUsers } from "../actions";
import UserHeader from "./UserHeader";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsandUsers();
  }
  renderPosts(posts) {
    return posts.map((post) => {
      return (
        <div key={post.id} className="item" style={{ padding: "10px 0px" }}>
          <i
            className="large middle aligned icon user"
            style={{ fontSize: "3.5rem" }}
          ></i>
          <div className="content">
            <h2 className="header">{post.title}</h2>
            <div
              className="description"
              style={{
                margin: "5px 0",
                fontSize: "1.3rem",
                lineHeight: "1.5rem",
              }}
            >
              {post.body}
              <UserHeader id={post.userId} />
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="ui relaxed divided list">
        {this.renderPosts(this.props.posts)}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { fetchPostsandUsers })(PostList);
