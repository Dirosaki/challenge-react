import { useCart } from 'hooks/useCart'

import cartIcon from 'assets/icons/cartIcon.svg'

import * as Styled from './styles'

export function Header() {
	const { quantityMoviesInCart } = useCart()

	return (
		<Styled.Header>
			<Styled.Logo to="/">
				<strong>WeMovies</strong>
			</Styled.Logo>
			<Styled.Cart to="/carrinho">
				<div>
					<strong>Meu Carrinho</strong>
					<span>{quantityMoviesInCart} itens</span>
				</div>
				<img src={cartIcon} alt="" />
			</Styled.Cart>
		</Styled.Header>
	)
}
