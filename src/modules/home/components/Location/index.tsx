import React from 'react'

import useI18n from 'core/i18n/hooks/useI18n'

import Gap from 'common/components/Gap'
import Flex from 'common/components/Flex'


import { LOCATION_TITLE } from './locales'
import { MapDiv } from './styled'

const Map = () => {
	const I18n = useI18n()
	return (
		<Flex alignItems='center' justifyContent='space-between' direction='column'>

				{I18n.t(LOCATION_TITLE)}

				<MapDiv src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.878340592946!2d100.56757951535201!3d13.846340498824937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ce0ba6b4eb7%3A0x2a0f9538c39c6511!2sFaculty%20of%20Engineering%20Building%2017%20(International%20Undergraduate%20Program%20%3A%20IUP)!5e0!3m2!1sen!2sth!4v1604669686252!5m2!1sen!2sth" />
		</Flex>
	)
}

export default Map;