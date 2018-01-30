import React from 'react'
import Benefits from './benefits'
import MicroFrontendExplosion from './micro-frontend-explosion'
import MemberHowMany from './member/how-many'
import MemberAnswers from './member/answers'
import AdviserHowMany from './adviser/how-many'
import AdviserAnswers from './adviser/answers'

export default (
  <div hasSlideChildren>
    {Benefits}
    {MicroFrontendExplosion}
    {MemberHowMany}
    {MemberAnswers}
    {AdviserHowMany}
    {AdviserAnswers}
  </div>
)
