import styled, { css } from 'styled-components'

export const Container = styled.main`
	margin: 0 auto;
	padding: 0 1rem 3rem;
	max-width: 46.75rem;
`

export const CartWrapper = styled.div`
	${({ theme }) => css`
		padding: 0.75rem;
		background: ${theme.colors.white};
		border-radius: ${theme.borderRadius};

		header {
			padding: 0.5rem 0;
			display: flex;

			strong {
				margin-left: 8.75rem;
				font-size: 0.875rem;
				text-transform: uppercase;
				color: ${theme.colors.gray};

				&:last-of-type {
					margin-left: 7.25rem;
				}
			}
		}
	`}
`

export const Footer = styled.footer`
	${({ theme }) => css`
		margin-top: 1rem;
		padding-top: 0.75rem;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		border-top: 1px solid ${theme.colors.gray};

		button {
			width: 11.25rem;
		}

		strong {
			font-size: 1.5rem;

			span {
				font-size: 0.875rem;
				color: ${theme.colors.gray};
				text-transform: uppercase;
			}
		}
	`}
`

export const EmptyCart = styled.div`
	${({ theme }) => css`
		padding: 3.875rem 0;
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
