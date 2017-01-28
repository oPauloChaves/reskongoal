import React from 'react'
import ProjectList from '../project/ProjectList'
import ProjectPage from '../project/ProjectContainer'

class AppMain extends React.Component {

  static defaultProps = {
    projects: [{
      id: 1,
      name: 'Reskongoal',
      description: 'Notes and Project Management Web App Built with ReactJS',
    }, {
      id: 2,
      name: 'EFD',
      description: 'Just a cool project I working on at work'
    }, {
      id: 3,
      name: 'Casamento',
      description: 'This is a project for the whole life'
    }, {
      id: 4,
      name: 'Full Stack Engineer',
      description: 'Improve my skills with Back-end and Front-end'
    }]
  }

  state = {
    projects: this.props.projects
  }

  render() {
    const { pathname } = this.props

    return (
      <div>
        <ProjectList pathname={pathname} projects={this.state.projects} />
      </div>
    )
  }
}

export default AppMain
