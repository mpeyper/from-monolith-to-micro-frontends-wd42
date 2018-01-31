import React from 'react'
import { Slide, Heading, List, ListItem, Notes } from 'spectacle'

export default (
  <Slide>
    <Heading textFont="primary" textColor="secondary">
      Issues
    </Heading>
    <List ordered textFont="secondary" textColor="quartenary">
      <ListItem>Releases</ListItem>
      <ListItem>Bundle Size</ListItem>
      <ListItem>Assets</ListItem>
    </List>
    <Notes>
      Hard to tell what is being released<br />
      Bundle size blows out over extra frameworks, duplicate packages and webpack in general<br />
      How to deal with assets for the components?<br />
    </Notes>
  </Slide>
)
