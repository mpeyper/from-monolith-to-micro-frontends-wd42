import React from 'react'
import Issues from './issues'
import ExternalArtifacts from './external-artifacts'
import LazyLoading from './lazy-loading'
import ReduxDynostore from './redux-dynostore'
import Assets from './assets'

export default (
  <div hasSlideChildren>
    {Issues}
    {ExternalArtifacts}
    {LazyLoading}
    {ReduxDynostore}
    {Assets}
  </div>
)
