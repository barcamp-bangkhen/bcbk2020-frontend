import React from 'react'

import ContentContainer from 'common/components/ContentContainer'
import Flex from 'common/components/Flex'
import Gap from 'common/components/Gap'
import Text from 'common/components/Text'
import { blue } from 'common/styles/colors'

import EventDetail from 'modules/home/components/EventDetail'
import Footer from 'modules/home/components/Footer'
import Map from 'modules/home/components/Location'
import RegisterSection from 'modules/home/components/RegisterSection'
import Sponsor from 'modules/home/components/Sponsor'

import createMeta from './createMeta'

const HomePage = () => (
	<ContentContainer>
		{createMeta()}
		<Gap size="32px" type="vertical">
			<Flex alignItems="center" justifyContent="center" direction="column">
				<Gap size="56vh" type="vertical">
					<RegisterSection />
						<Gap size="15vh" type="vertical">
							<Text color={blue}>
								<EventDetail />
							</Text>
							<Map />
							<Sponsor />
						</Gap>
				</Gap>

			</Flex>

		</Gap>

		<Footer />
	</ContentContainer>
)

export default HomePage
