import React from 'react'

import ContentContainer from 'common/components/ContentContainer'
import Gap from 'common/components/Gap'

import EventDetail from 'modules/home/components/EventDetail'
import RegisterSection from 'modules/home/components/RegisterSection'
import TimeTable from 'modules/home/components/TimeTable'

import createMeta from './createMeta'

const HomePage = () => (
    <ContentContainer>
      {createMeta()}
      <Gap size="32px" type="vertical">
        <RegisterSection />
        <EventDetail />
        <TimeTable />
      </Gap>
    </ContentContainer>
  )

export default HomePage
