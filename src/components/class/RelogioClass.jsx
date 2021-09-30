import React from "react";

export default class RelogioClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hora: new Date()
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        hora: new Date()
      })
    }, 1000)
  }
  
  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <h1>{this.state.hora.toLocaleTimeString()}</h1>
    )
  }
}