import React from 'react'

export default class ZooDetails extends React.Component {

  handleClick = (event) => {
    this.props.save(this.props.thisZoo)
  }

  render() {
    let zoo = this.props.thisZoo
    return (
      <div>
        <h3> Name: {zoo.Name} </h3>
        <p> Location: {zoo.Location} </p>
        <p> Phone: {zoo.Phone_Num}</p>
        <button onClick={this.handleClick}>Save this location</button>
      </div>
    )
  }

}
