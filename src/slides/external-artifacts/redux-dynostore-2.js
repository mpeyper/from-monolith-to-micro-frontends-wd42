import React from 'react'
import { Slide, Heading, CodePane } from 'spectacle'
import { child } from './examples/redux-dynostore'

export default (
  <Slide>
    <Heading textSize={60} textFont="primary" textColor="secondary" margin="0 0 50px 0">
      redux-dynostore
    </Heading>
    <CodePane textSize={18} lang="js" source={child} />
  </Slide>
)
