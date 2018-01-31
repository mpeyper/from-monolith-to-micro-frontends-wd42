import React from 'react'
import Issues from './issues'
import ExternalArtifacts from './external-artifacts'
import LazyLoading from './lazy-loading'
import ReduxDynostore1 from './redux-dynostore-1'
import ReduxDynostore2 from './redux-dynostore-2'
import Assets from './assets'

export default (
  <div hasSlideChildren>
    {Issues}
    {ExternalArtifacts}
    {LazyLoading}
    {ReduxDynostore1}
    {ReduxDynostore2}
    {Assets}
  </div>
)
