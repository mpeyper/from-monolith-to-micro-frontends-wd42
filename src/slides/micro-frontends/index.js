import React from 'react'
import FirstMicroFrontend from './first-micro-frontend'
import Complications from './complications'
import Theming from './theming'
import Analytics from './analytics'
import ReduxTraversal from './redux-traversal'
import NestedMicroFrontends from './nested-micro-frontends'
import TraversalProblem from './traversal-problem'
import ReduxSubspace from './redux-subspace'

export default (
  <div hasSlideChildren>
    {FirstMicroFrontend}
    {Complications}
    {Theming}
    {Analytics}
    {ReduxTraversal}
    {NestedMicroFrontends}
    {TraversalProblem}
    {ReduxSubspace}
  </div>
)
