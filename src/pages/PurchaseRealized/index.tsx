import { useNavigate } from 'react-router-dom'

import { Button } from 'components/Button'

import purchaseRealizedIllustration from 'assets/images/purchaseRealizedIllustration.png'

import * as Styled from './styles'

export function PurchaseRealized() {
	const navigate = useNavigate()

	return (
		<Styled.Container>
			<strong>Compra realizada com sucesso!</strong>
			<img src={purchaseRealizedIllustration} alt="" />
			<Button type="button" onClick={() => navigate('/')}>
				Voltar
			</Button>
		</Styled.Container>
	)
}
