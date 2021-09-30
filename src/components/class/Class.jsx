import React, { Component } from 'react'

export default class Class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cliques: 0
    }
  }

  render() {
    return (
      <div>
        <h1 onClick={() => {
          this.setState({ cliques: this.state.cliques + 1 })
        }}>
          {this.state.cliques}
        </h1>
      </div>
    )
  }
}
