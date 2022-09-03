import { Button } from 'components/Button'

import { formatCurrency } from 'utils/formatCurrency'

import * as Styled from './styles'

type MovieCardProps = {
	image: string
	title: string
	price: number
}

export function MovieCard({ image, title, price }: MovieCardProps) {
	return (
		<Styled.MovieCard>
			<img src={image} alt="" />
			<strong>{title}</strong>
			<p>{formatCurrency(price)}</p>
			<Button type="button">Adicionar ao carrinho</Button>
		</Styled.MovieCard>
	)
}
