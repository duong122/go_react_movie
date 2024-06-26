import React, { Component } from "react";

export default class AppContent extends Component {

  constructor(props) {
    super(props)
    this.listRef = React.createRef()
    this.handlePostChange = this.handlePostChange.bind(this)
  }

  handlePostChange(posts) {
    this.props.handlePostChange(posts)
  }
  
  state = {posts: []}

  fetchList = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then(json => {
        this.setState({posts: json})
        this.handlePostChange(json)
      })
  }

  clickItem = (x) => {
    console.log("clicked ", x)
  }

  render() {
    return (
      <div>
        This is the content.

        <br />
        <hr/>
        

        <button onClick={this.fetchList} className="btn btn-primary">Fetch data</button>

        <hr />

        <p>post's {this.state.posts.length} item long</p>
        <ul>
            {this.state.posts.map((c) => (
              <li key={c.id}>
                <a href="#!" onClick={() => this.clickItem(c.id)}>
                  {c.title}
                </a>
              </li>
            ))}
        </ul>
      </div>
    )
  }
}