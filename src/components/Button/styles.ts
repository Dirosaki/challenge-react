import styled, { css } from 'styled-components'

import { darken } from 'polished'

export const Button = styled.button`
	${({ theme }) => css`
		padding: 0 0.75rem;
		height: 2.5rem;
		background: ${theme.colors.blue};
		border: none;
		border-radius: 0.25rem;
		font-size: 0.875rem;
		font-weight: 700;
		text-transform: uppercase;
		color: ${theme.colors.white};
		transition: background 0.2s;
		cursor: pointer;

		&:hover {
			background: ${darken(0.1, theme.colors.blue)};
		}
	`}
`
