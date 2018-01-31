import React from 'react'
import { Slide, Heading, CodePane } from 'spectacle'
import { config } from './examples/environment-yml'

export default (
  <Slide>
    <Heading textSize={60} textFont="primary" textColor="secondary" margin="0 0 50px 0">
      External Artifacts
    </Heading>
    <CodePane textSize={18} source={config} />
  </Slide>
)
