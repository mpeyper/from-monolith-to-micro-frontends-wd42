import React from 'react'
import { Slide, Heading, List, ListItem } from 'spectacle'

export default (
  <Slide>
    <Heading fit textFont="primary" textColor="secondary" margin="0 0 50px 0">
      What is a Micro-Frontend?
    </Heading>
    <List textFont="secondary" textColor="quartenary">
      <ListItem textSize={32} margin="0 0 25px 0">An encapsulated piece of the frontend</ListItem>
      <ListItem textSize={32} margin="0 0 25px 0">Defined by a domain concept</ListItem>
      <ListItem textSize={32} margin="0 0 25px 0">Able to run on it's own with minimal setup</ListItem>
    </List>
  </Slide>
)
