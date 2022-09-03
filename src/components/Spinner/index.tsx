import * as Styled from './styles'

type SpinnerProps = {
	size?: number
	color?: string
	weight?: number
}

export function Spinner({
	size = 40,
	color = '#ffffff',
	weight = 4,
}: SpinnerProps) {
	return <Styled.Spinner size={size} color={color} weight={weight} />
}
