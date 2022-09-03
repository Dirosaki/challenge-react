import styled, { css } from 'styled-components'

export const MovieCard = styled.div`
	${({ theme }) => css`
		padding: 0.75rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		background: ${theme.colors.white};
		border-radius: ${theme.borderRadius};

		img {
			align-self: center;
		}

		strong {
			font-weight: 700;
			text-align: center;
			color: #333333;
		}

		p {
			font-size: 0.875rem;
			font-weight: 700;
		}

		button {
			font-size: 12px;
		}
	`}
`
