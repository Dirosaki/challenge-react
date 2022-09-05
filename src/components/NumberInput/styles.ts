import styled, { css } from 'styled-components'

export const NumberInput = styled.div`
	display: flex;
	align-items: center;
	gap: 0.375rem;
`

export const SpinButton = styled.button`
	line-height: 0;
	border: none;
	background: transparent;
	cursor: pointer;

	&:disabled {
		opacity: 0.5;
	}
`

export const Input = styled.input`
	${({ theme }) => css`
		padding: 0.25rem;
		height: 1.75rem;
		width: 3rem;
		background: ${theme.colors.white};
		border: 1px solid #d9d9d9;
		border-radius: ${theme.borderRadius};
		font-size: 0.875rem;
		text-align: center;
		color: ${theme.colors.text};
	`}
`
