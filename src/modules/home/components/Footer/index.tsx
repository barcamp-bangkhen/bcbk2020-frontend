import React from 'react'

import Flex from 'common/components/Flex'
import Gap from 'common/components/Gap'

import FireIcon from 'common/components/icons/FireIcon'

import Contact from 'modules/home/components/Contact'

const ICON_SIZE = 24

const Footer =() =>{
    return(

        <div style={{border: "1px solid black;"}}>
        <Flex alignItems='center' justifyContent='space-between' direction='row'>
                <Contact/>
                <FireIcon/>
                @barcamp2020
        </Flex>
        </div>
    )
}

export default Footer