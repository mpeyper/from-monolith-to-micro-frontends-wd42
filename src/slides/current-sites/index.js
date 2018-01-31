import React from 'react'
import CurrentState from './current-state'
import Benefits from './benefits'
import MemberHowMany from './member/how-many'
import MemberAnswers from './member/answers'
import AdviserHowMany from './adviser/how-many'
import AdviserAnswers from './adviser/answers'

export default (
  <div hasSlideChildren>
    {CurrentState}
    {Benefits}
    {MemberHowMany}
    {MemberAnswers}
    {AdviserHowMany}
    {AdviserAnswers}
  </div>
)
