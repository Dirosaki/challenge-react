import { useCart } from 'hooks/useCart'

import { MovieProps } from 'pages/Home'

import { NumberInput } from 'components/NumberInput'

import { formatCurrency } from 'utils/formatCurrency'

import trashIcon from 'assets/icons/trash.svg'

import * as Styled from './styles'

type MovieCardForCartProps = {
	movie: MovieProps
}

export function MovieCardForCart({ movie }: MovieCardForCartProps) {
	const {
		increaseMovieQuantityById,
		decreaseMovieQuantityById,
		changeMovieQuantityById,
		removeMovieFromCart,
	} = useCart()

	function handleIncreaseMovieQuantity() {
		increaseMovieQuantityById(movie.id)
	}

	function handleDecreaseMovieQuantity() {
		decreaseMovieQuantityById(movie.id)
	}

	function handleRemoveMovie() {
		removeMovieFromCart(movie.id)
	}

	function handleChangeMovieQuantity(quantity: number) {
		changeMovieQuantityById(movie.id, quantity)
	}

	return (
		<Styled.MovieCardInCart>
			<img src={movie.image} alt={movie.title} />
			<div>
				<strong>{movie.title}</strong>
				<strong>{formatCurrency(movie.price)}</strong>
			</div>
			<NumberInput
				quantityMovies={movie.quantity}
				onIncreaseQuantityMovie={handleIncreaseMovieQuantity}
				onDecreaseQuantityMovie={handleDecreaseMovieQuantity}
				onQuantityMovieReceived={handleChangeMovieQuantity}
			/>
			<strong>{formatCurrency(movie.price * movie.quantity)}</strong>
			<button
				type="button"
				onClick={handleRemoveMovie}
				title="Remover filme do carrinho"
			>
				<img src={trashIcon} alt="" />
			</button>
		</Styled.MovieCardInCart>
	)
}
