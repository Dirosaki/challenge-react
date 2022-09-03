import { Link } from 'react-router-dom'

import styled, { css } from 'styled-components'

export const Header = styled.header`
	margin: 1rem auto 2.5rem;
	padding: 0 1rem;
	height: 4.5rem;
	max-width: 46.75rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

const BaseLink = styled(Link)`
	${({ theme }) => css`
		color: ${theme.colors.white};
		text-decoration: none;
	`}
`

export const Logo = styled(BaseLink)`
	font-size: 1.25rem;
	font-weight: 700;
`

export const Cart = styled(BaseLink)`
	${({ theme }) => css`
		display: flex;
		gap: 0.5rem;

		div {
			display: flex;
			flex-direction: column;
			align-items: flex-end;

			strong {
				font-size: 0.875rem;
				font-weight: 600;
			}

			span {
				font-size: 0.75rem;
				font-weight: 600;
				color: ${theme.colors.gray};
			}
		}
	`}
`
