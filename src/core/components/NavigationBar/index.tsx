import React, { useCallback, useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import useI18n from 'core/i18n/hooks/useI18n'
import useSetLocale from 'core/i18n/hooks/useSetLocale'
import { Locale } from 'core/i18n/types'

import Text from 'common/components/Text'
import { gray } from 'common/styles/colors'

import BarCampIcon from '../../../common/components/icons/BarCampIcon'

import { TIME_TABLE, FAQS, SESSION } from './locales'
import { Bars, NavContainer, NavLink, NavWrapper, MenuGap, LangGap } from './styled'

const NavigationBar = ({ toggle }: { toggle: any }) => {
	const setLocale = useSetLocale()

	const setLocaleTH = useCallback(() => {
		setLocale(Locale.th)
	}, [setLocale])

	const setLocaleEN = useCallback(() => {
		setLocale(Locale.en)
	}, [setLocale])

	const I18n = useI18n()

	const router = useRouter()

	const [scrollState, setScrollState] = useState(false)

	const changeBG = () => {
		if (window.scrollY >= 80) {
			setScrollState(false)
		} else {
			setScrollState(true)
		}
	}

	if (typeof window !== 'undefined') {
		window.addEventListener('scroll', changeBG)
	}

	return (
		<NavWrapper justifyContent="center">
			<NavContainer
				alignItems="center"
				justifyContent="space-between"
				className={scrollState ? 'trans' : 'color'}
			>
				<Link href="/" passHref>
					<a>
						<BarCampIcon />
					</a>
				</Link>
				<Bars onClick={toggle.toggle} style={{ paddingRight: '20px' }} />

				<MenuGap size="6rem" alignCenter>
					<Link href="/table" passHref>
						<NavLink className={router.pathname === '/table' ? 'active' : ''}>
							{I18n.t(TIME_TABLE)}
						</NavLink>
					</Link>
					<Link href="/FAQS" passHref>
						<NavLink className={router.pathname === '/FAQS' ? 'active' : ''}>
							{I18n.t(FAQS)}
						</NavLink>
					</Link>
					<Link href="/session" passHref>
						<NavLink className={router.pathname === '/seesion' ? 'active' : ''}>
							{I18n.t(SESSION)}
						</NavLink>
					</Link>
				</MenuGap>

				<Text as="div" size="1.2vw" color={gray[700]} margin={'0px 20px 0px 0px'}>
					<LangGap size="1.5vw">
						<Text onClick={setLocaleEN}>
							<img
								src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6I0YwRjBGMDsiIGN4PSIyNTYiIGN5PSIyNTYiIHI9IjI1NiIvPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzAwNTJCNDsiIGQ9Ik01Mi45MiwxMDAuMTQyYy0yMC4xMDksMjYuMTYzLTM1LjI3Miw1Ni4zMTgtNDQuMTAxLDg5LjA3N2gxMzMuMTc4TDUyLjkyLDEwMC4xNDJ6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzAwNTJCNDsiIGQ9Ik01MDMuMTgxLDE4OS4yMTljLTguODI5LTMyLjc1OC0yMy45OTMtNjIuOTEzLTQ0LjEwMS04OS4wNzZsLTg5LjA3NSw4OS4wNzZINTAzLjE4MXoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMDA1MkI0OyIgZD0iTTguODE5LDMyMi43ODRjOC44MywzMi43NTgsMjMuOTkzLDYyLjkxMyw0NC4xMDEsODkuMDc1bDg5LjA3NC04OS4wNzVMOC44MTksMzIyLjc4NEw4LjgxOSwzMjIuNzg0DQoJCXoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMDA1MkI0OyIgZD0iTTQxMS44NTgsNTIuOTIxYy0yNi4xNjMtMjAuMTA5LTU2LjMxNy0zNS4yNzItODkuMDc2LTQ0LjEwMnYxMzMuMTc3TDQxMS44NTgsNTIuOTIxeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMwMDUyQjQ7IiBkPSJNMTAwLjE0Miw0NTkuMDc5YzI2LjE2MywyMC4xMDksNTYuMzE4LDM1LjI3Miw4OS4wNzYsNDQuMTAyVjM3MC4wMDVMMTAwLjE0Miw0NTkuMDc5eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMwMDUyQjQ7IiBkPSJNMTg5LjIxNyw4LjgxOWMtMzIuNzU4LDguODMtNjIuOTEzLDIzLjk5My04OS4wNzUsNDQuMTAxbDg5LjA3NSw4OS4wNzVWOC44MTl6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzAwNTJCNDsiIGQ9Ik0zMjIuNzgzLDUwMy4xODFjMzIuNzU4LTguODMsNjIuOTEzLTIzLjk5Myw4OS4wNzUtNDQuMTAxbC04OS4wNzUtODkuMDc1VjUwMy4xODF6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzAwNTJCNDsiIGQ9Ik0zNzAuMDA1LDMyMi43ODRsODkuMDc1LDg5LjA3NmMyMC4xMDgtMjYuMTYyLDM1LjI3Mi01Ni4zMTgsNDQuMTAxLTg5LjA3NkgzNzAuMDA1eiIvPg0KPC9nPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0Q4MDAyNzsiIGQ9Ik01MDkuODMzLDIyMi42MDloLTIyMC40NGgtMC4wMDFWMi4xNjdDMjc4LjQ2MSwwLjc0NCwyNjcuMzE3LDAsMjU2LDANCgkJYy0xMS4zMTksMC0yMi40NjEsMC43NDQtMzMuMzkxLDIuMTY3djIyMC40NHYwLjAwMUgyLjE2N0MwLjc0NCwyMzMuNTM5LDAsMjQ0LjY4MywwLDI1NmMwLDExLjMxOSwwLjc0NCwyMi40NjEsMi4xNjcsMzMuMzkxDQoJCWgyMjAuNDRoMC4wMDF2MjIwLjQ0MkMyMzMuNTM5LDUxMS4yNTYsMjQ0LjY4MSw1MTIsMjU2LDUxMmMxMS4zMTcsMCwyMi40NjEtMC43NDMsMzMuMzkxLTIuMTY3di0yMjAuNDR2LTAuMDAxaDIyMC40NDINCgkJQzUxMS4yNTYsMjc4LjQ2MSw1MTIsMjY3LjMxOSw1MTIsMjU2QzUxMiwyNDQuNjgzLDUxMS4yNTYsMjMzLjUzOSw1MDkuODMzLDIyMi42MDl6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0Q4MDAyNzsiIGQ9Ik0zMjIuNzgzLDMyMi43ODRMMzIyLjc4MywzMjIuNzg0TDQzNy4wMTksNDM3LjAyYzUuMjU0LTUuMjUyLDEwLjI2Ni0xMC43NDMsMTUuMDQ4LTE2LjQzNQ0KCQlsLTk3LjgwMi05Ny44MDJoLTMxLjQ4MlYzMjIuNzg0eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNEODAwMjc7IiBkPSJNMTg5LjIxNywzMjIuNzg0aC0wLjAwMkw3NC45OCw0MzcuMDE5YzUuMjUyLDUuMjU0LDEwLjc0MywxMC4yNjYsMTYuNDM1LDE1LjA0OGw5Ny44MDItOTcuODA0DQoJCVYzMjIuNzg0eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNEODAwMjc7IiBkPSJNMTg5LjIxNywxODkuMjE5di0wLjAwMkw3NC45ODEsNzQuOThjLTUuMjU0LDUuMjUyLTEwLjI2NiwxMC43NDMtMTUuMDQ4LDE2LjQzNWw5Ny44MDMsOTcuODAzDQoJCUgxODkuMjE3eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNEODAwMjc7IiBkPSJNMzIyLjc4MywxODkuMjE5TDMyMi43ODMsMTg5LjIxOUw0MzcuMDIsNzQuOTgxYy01LjI1Mi01LjI1NC0xMC43NDMtMTAuMjY2LTE2LjQzNS0xNS4wNDcNCgkJbC05Ny44MDIsOTcuODAzVjE4OS4yMTl6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="
								width="30"
								height="30"
							/>
						</Text>
						<Text onClick={setLocaleTH}>
							<img
								src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6I0YwRjBGMDsiIGN4PSIyNTYiIGN5PSIyNTYiIHI9IjI1NiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzAwNTJCNDsiIGQ9Ik00OTYuMDc3LDE2Ni45NTdIMTUuOTIzQzUuNjMyLDE5NC42OSwwLDIyNC42ODYsMCwyNTZzNS42MzIsNjEuMzEsMTUuOTIzLDg5LjA0M2g0ODAuMTU1DQoJQzUwNi4zNjgsMzE3LjMxLDUxMiwyODcuMzE0LDUxMiwyNTZTNTA2LjM2OCwxOTQuNjksNDk2LjA3NywxNjYuOTU3eiIvPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0Q4MDAyNzsiIGQ9Ik0yNTYsMEMxNzguNDA5LDAsMTA4Ljg4NiwzNC41MjQsNjEuOTM5LDg5LjA0M0g0NTAuMDZDNDAzLjExNCwzNC41MjQsMzMzLjU5MSwwLDI1NiwweiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNEODAwMjc7IiBkPSJNNDUwLjA2MSw0MjIuOTU3SDYxLjkzOUMxMDguODg2LDQ3Ny40NzYsMTc4LjQwOSw1MTIsMjU2LDUxMlM0MDMuMTE0LDQ3Ny40NzYsNDUwLjA2MSw0MjIuOTU3eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
								width="30"
								height="30"
							/>
						</Text>
					</LangGap>
				</Text>
			</NavContainer>
		</NavWrapper>
	)
}

export default NavigationBar
