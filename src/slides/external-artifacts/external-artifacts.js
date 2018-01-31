import React from 'react'
import { Slide, Heading, CodePane, Notes } from 'spectacle'
import { artifactsIndex } from './examples/config'

export default (
  <Slide>
    <Heading textSize={60} textFont="primary" textColor="secondary" margin="0 0 50px 0">
      External Artifacts
    </Heading>
    <CodePane textSize={12} lang ="json" source={artifactsIndex} />
    <Notes>
      Custom deployment logic<br />
      Generates an artifact-index the parent app can use to download assets<br />
      Doesn't solve load times<br />
    </Notes>
  </Slide>
)
