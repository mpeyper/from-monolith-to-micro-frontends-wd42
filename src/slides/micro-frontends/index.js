import React from 'react'
import FirstMicroFrontend from './first-micro-frontend'
import StandingInstructions from './first-micro-frontend/standing-instructions'
import OldInvestments from './first-micro-frontend/old-investments'
import Investments from './first-micro-frontend/investments'
import Complications from './complications'
import Theming from './theming'
import Analytics from './analytics'
import NamespacingActions from './namespacing-actions'
import ReduxTraversal1 from './finding-state/redux-traversal-1'
import ReduxTraversal2 from './finding-state/redux-traversal-2'
import ReduxTraversal3 from './finding-state/redux-traversal-3'
import ReduxTraversal4 from './finding-state/redux-traversal-4'
import TraversalProblem from './finding-state/traversal-problem'
import ReduxSubspace from './finding-state/redux-subspace'
import ReduxSubspace1 from './finding-state/redux-subspace-1'
import ReduxSubspace2 from './finding-state/redux-subspace-2'
import ReduxSubspace3 from './finding-state/redux-subspace-3'
import ReduxSubspace4 from './finding-state/redux-subspace-4'
import ReduxSubspace5 from './finding-state/redux-subspace-5'
import MicroFrontendExplosion from './micro-frontend-explosion'

export default (
  <div hasSlideChildren>
    {FirstMicroFrontend}
    {StandingInstructions}
    {OldInvestments}
    {Investments}
    {Complications}
    {Theming}
    {Analytics}
    {NamespacingActions}
    {ReduxTraversal1}
    {ReduxTraversal2}
    {ReduxTraversal3}
    {ReduxTraversal4}
    {TraversalProblem}
    {ReduxSubspace}
    {ReduxSubspace1}
    {ReduxSubspace2}
    {ReduxSubspace3}
    {ReduxSubspace4}
    {ReduxSubspace5}
    {MicroFrontendExplosion}
  </div>
)
