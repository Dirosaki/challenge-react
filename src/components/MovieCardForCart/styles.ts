import styled from 'styled-components'

export const MovieCardInCart = styled.div`
	margin-top: 0.75rem;
	padding: 0.5rem 0;
	display: flex;
	align-items: center;

	> img {
		height: 7.125rem;
	}

	> div:first-of-type {
		margin-left: 3.125rem;
		width: 7.5rem;
		display: flex;
		flex-direction: column;
		gap: 4px;

		strong {
			font-size: 14px;
		}
	}

	> div:last-of-type {
		margin-left: 3.5rem;
	}

	> strong {
		margin-left: 84px;
	}

	> button {
		margin-left: auto;
		margin-right: 2rem;
		background: transparent;
		border: none;
		line-height: 0;
		cursor: pointer;
	}
`
