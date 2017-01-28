import './Project.css'

import React from 'react'
import { Grid, Cell } from 'react-mdl'
import Project from './Project'

export default class ProjectList extends React.Component {

  render() {
    const { projects, pathname } = this.props

    return (
      <div style={{ width: '80%', margin: 'auto' }}>
        <Grid>
          {projects.map((p, i) => <Cell key={p.id} col={4} tablet={6}>
            <Project pathname={pathname} {...p} />
          </Cell>)}
        </Grid>
      </div>
    )
  }
}
