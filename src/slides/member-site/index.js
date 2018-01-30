import React from 'react'
import MemberSite from './member-site'
import InnovationDayHowMany from './innovation-day/how-many'
import InnovationDayAnswers from './innovation-day/answers'
import PublicReleaseHowMany from './public-release/how-many'
import PublicReleaseAnswers from './public-release/answers'

export default (
  <div hasSlideChildren>
    {MemberSite}
    {InnovationDayHowMany}
    {InnovationDayAnswers}
    {PublicReleaseHowMany}
    {PublicReleaseAnswers}
  </div>
)
