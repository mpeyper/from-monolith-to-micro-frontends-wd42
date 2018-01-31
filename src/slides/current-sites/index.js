import React from 'react'
import Benefits from './benefits'
import CurrentState from './current-state'
import MemberHowMany from './member/how-many'
import MemberAnswers from './member/answers'
import AdviserHowMany from './adviser/how-many'
import AdviserAnswers from './adviser/answers'

export default (
  <div hasSlideChildren>
    {Benefits}
    {CurrentState}
    {MemberHowMany}
    {MemberAnswers}
    {AdviserHowMany}
    {AdviserAnswers}
  </div>
)
