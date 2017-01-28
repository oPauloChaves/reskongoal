import React from 'react'
import { Link } from 'react-router'
import { Card, CardTitle, CardText, CardActions, CardMenu, IconButton, Button } from 'react-mdl'

export default class Project extends React.Component {

  render() {
    const { id, name, description, pathname } = this.props

    return (
      <Card shadow={0} style={{ width: '100%' }}>
        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>{name}</CardTitle>
        <CardText>{description}</CardText>
        <CardActions border>
          <Link to={`projects/${id}`}>Open Project</Link>
        </CardActions>
        <CardMenu style={{ color: '#fff' }}>
          <IconButton name="share" />
        </CardMenu>
      </Card>
    )
  }
}
