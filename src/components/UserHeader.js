/* Take the big list then make smaller request */
import React from "react";
import { connect } from "react-redux";
class UserHeader extends React.Component {
  render() {
    if (!this.props.user) return null;
    return <h2>{this.props.user.name}</h2>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.id) };
};
//mapStateToProps is used to do all the precalculation on the res data

export default connect(mapStateToProps)(UserHeader);
