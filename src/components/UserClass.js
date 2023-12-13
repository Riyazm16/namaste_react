import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar_url: null,
      name: null,
      location: null,
      bio: null,
    };
  }

  async componentDidMount() {
    console.log("component mounted");
    const apiData = await fetch("https://api.github.com/users/Riyazm16");
    const apiJson = await apiData.json();
    // console.log(apiJson);
    this.setState(apiJson);
  }

  componentWillUnmount() {
    console.log("component unmounted");
  }

  componentDidUpdate() {
    console.log("component did updated");
  }

  render() {
    console.log();
    console.log(this.state);

    const { avatar_url, name, location, bio } = this.state;
    return (
      <div className="user-details">
        {/* <h1>Count: {count}</h1>
        <h1>Count2: {count2}</h1> */}
        {/* <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase Count
        </button> */}
        <img src={avatar_url}></img>
        <h2>{name}</h2>
        <h3>Location: {location}</h3>
        <h3>Bio: {bio}</h3>
        <h4>linkedin: https://www.linkedin.com/in/riyaj-mulla-284927ab/</h4>
      </div>
    );
  }
}

export default UserClass;
