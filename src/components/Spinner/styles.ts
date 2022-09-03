import styled, { css, keyframes } from 'styled-components'

import { rgba } from 'polished'

const rotate = keyframes`
	to {
		transform: rotate(360deg)
	}
`

type SpinnerProps = {
	size: number
	color: string
	weight: number
}

export const Spinner = styled.div<SpinnerProps>`
	${({ size, color, weight }) => css`
		width: ${size}px;
		height: ${size}px;
		border: ${weight}px solid ${rgba(color, 0.2)};
		border-radius: 999px;
		border-top-color: ${color};
		animation: ${rotate} 0.75s infinite;
	`}
`
