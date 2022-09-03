import { ButtonHTMLAttributes } from 'react'

import * as Styled from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ ...props }: ButtonProps) {
	return <Styled.Button {...props} />
}
