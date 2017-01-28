import React from 'react'

export default class ProjectContainer extends React.Component {
  render() {
    const { params } = this.props
    return (
      <h2>Project Page {params.id}</h2>
    )
  }
}
