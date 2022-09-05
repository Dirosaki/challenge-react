import { useNavigate } from 'react-router-dom'

import { useCart } from 'hooks/useCart'

import { Button } from 'components/Button'
import { MovieCardForCart } from 'components/MovieCardForCart'

import { formatCurrency } from 'utils/formatCurrency'

import emptyIllustration from 'assets/images/emptyIllustration.png'

import * as Styled from './styles'

export function Cart() {
	const navigate = useNavigate()

	const { moviesInCart, quantityMoviesInCart, totalPrice, clearCart } =
		useCart()

	function handleCheckout() {
		navigate('/compra-realizada')
		clearCart()
	}

	return (
		<Styled.Container>
			{quantityMoviesInCart && (
				<Styled.CartWrapper>
					<header>
						<strong>Produto</strong>
						<strong>QTD</strong>
						<strong>Subtotal</strong>
					</header>
					{moviesInCart.map((movie) => (
						<MovieCardForCart key={movie.id} movie={movie} />
					))}
					<Styled.Footer>
						<Button type="button" onClick={handleCheckout}>
							Finalizar pedido
						</Button>
						<strong>
							<span>Total</span> {formatCurrency(totalPrice)}
						</strong>
					</Styled.Footer>
				</Styled.CartWrapper>
			)}
			{!quantityMoviesInCart && (
				<Styled.EmptyCart>
					<strong>Parece que não há nada por aqui :(</strong>

					<img src={emptyIllustration} alt="" />
					<Button type="button" onClick={() => navigate('/')}>
						Voltar
					</Button>
				</Styled.EmptyCart>
			)}
		</Styled.Container>
	)
}
