import cartIcon from 'assets/icons/cartIcon.svg'

import * as Styled from './styles'

export function Header() {
	return (
		<Styled.Header>
			<Styled.Logo to="/">
				<strong>WeMovies</strong>
			</Styled.Logo>
			<Styled.Cart to="/carrinho">
				<div>
					<strong>Meu Carrinho</strong>
					<span>0 itens</span>
				</div>
				<img src={cartIcon} alt="" />
			</Styled.Cart>
		</Styled.Header>
	)
}
