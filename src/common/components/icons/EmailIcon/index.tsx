import React from 'react'

import { IconProps } from '../types'

const EmailIcon = ({ size, ...props }: IconProps) => {
	return (
		<svg
			height={size}
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M26.6665 5.3335H5.33317C3.8665 5.3335 2.67984 6.5335 2.67984 8.00016L2.6665 24.0002C2.6665 25.4668 3.8665 26.6668 5.33317 26.6668H26.6665C28.1332 26.6668 29.3332 25.4668 29.3332 24.0002V8.00016C29.3332 6.5335 28.1332 5.3335 26.6665 5.3335ZM26.6665 10.6668L15.9998 17.3335L5.33317 10.6668V8.00016L15.9998 14.6668L26.6665 8.00016V10.6668Z"
				fill="currentColor"
			/>
		</svg>
	)
}
export default EmailIcon
