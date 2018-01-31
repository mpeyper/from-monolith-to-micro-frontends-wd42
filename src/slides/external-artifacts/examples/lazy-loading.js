export const artifactLoader = `
import axios from 'axios'
import createArtifactLoader from '@ioof/artifact-loader'
import { ArtifactProvider, LoadableArtifact } from '@ioof/react-artifact-loader'

const artifactLoader = createArtifactLoader(() => {
  return axios.get('/artifacts-index.json')
    .then(response => response.data.web_artifacts)
})

const App = () => (
  <ArtifactProvider artifactLoader={artifactLoader}>
    <LoadableArtifact artifactId='example-micro-frontend'>
      {({ Example }) => <Example />}
    </LoadableArtifact>
  </ArtifactProvider>
)
`.trim()