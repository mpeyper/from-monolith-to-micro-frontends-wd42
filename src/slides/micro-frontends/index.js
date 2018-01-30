import React from 'react'
import FirstMicroFrontend from './first-micro-frontend'
import StandingInstructions from './first-micro-frontend/standing-instructions'
import OldInvestments from './first-micro-frontend/old-investments'
import Investments from './first-micro-frontend/investments'
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
    {StandingInstructions}
    {OldInvestments}
    {Investments}
    {Complications}
    {Theming}
    {Analytics}
    {ReduxTraversal}
    {NestedMicroFrontends}
    {TraversalProblem}
    {ReduxSubspace}
  </div>
)
