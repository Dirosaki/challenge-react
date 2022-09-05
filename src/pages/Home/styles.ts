import styled, { css } from 'styled-components'

export const Container = styled.main`
	margin: 0 auto;
	padding: 0 1rem;
	max-width: 46.75rem;
`

export const MoviesWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 0.75rem;
`

const BaseWrapper = styled.div`
	${({ theme }) => css`
		padding: 3rem 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;

		strong {
			font-size: 1.25rem;
			font-weight: 600;
			color: ${theme.colors.white};
		}
	`}
`

export const FetchingErrorWrapper = styled(BaseWrapper)``

export const FetchingWrapper = styled(BaseWrapper)``
