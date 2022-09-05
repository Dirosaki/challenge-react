import styled, { css } from 'styled-components'

export const Container = styled.main`
	${({ theme }) => css`
		margin: 0 auto;
		padding: 3.875rem 1rem 5rem;
		max-width: 46.75rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: ${theme.colors.white};
		border-radius: ${theme.borderRadius};

		strong {
			font-size: 1.25rem;
		}

		img {
			margin: 3rem 0 2.25rem;
		}

		button {
			width: 11.25rem;
		}
	`}
`
