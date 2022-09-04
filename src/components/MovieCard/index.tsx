import { Button } from 'components/Button'

import { formatCurrency } from 'utils/formatCurrency'

import * as Styled from './styles'

type MovieCardProps = {
	image: string
	title: string
	price: number
	onAddMovieToCart: () => void
}

export function MovieCard({
	image,
	title,
	price,
	onAddMovieToCart,
}: MovieCardProps) {
	return (
		<Styled.MovieCard>
			<img src={image} alt="" />
			<strong>{title}</strong>
			<p>{formatCurrency(price)}</p>
			<Button type="button" onClick={onAddMovieToCart}>
				Adicionar ao carrinho
			</Button>
		</Styled.MovieCard>
	)
}
