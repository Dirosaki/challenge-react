import { ChangeEvent, KeyboardEvent } from 'react'

import minusIcon from 'assets/icons/minus.svg'
import plusIcon from 'assets/icons/plus.svg'

import * as Styled from './styles'

const MIN = 1
const MAX = 99

type NumberInputProps = {
	quantityMovies: number
	onIncreaseQuantityMovie: () => void
	onDecreaseQuantityMovie: () => void
	onQuantityMovieReceived: (quantity: number) => void
}

type HandleKeys = Record<string, () => void>

export function NumberInput({
	quantityMovies = 1,
	onIncreaseQuantityMovie,
	onDecreaseQuantityMovie,
	onQuantityMovieReceived,
}: NumberInputProps) {
	const handleKeys: HandleKeys = {
		ArrowUp: () => onIncreaseQuantityMovie(),
		ArrowDown: () => onDecreaseQuantityMovie(),
		Home: () => onQuantityMovieReceived(MAX),
		End: () => onQuantityMovieReceived(MIN),
	}

	function handleChangeQuantity(event: ChangeEvent<HTMLInputElement>) {
		const { value } = event.target

		const formattedValue = value
			.replace(/\D/g, '')
			.replace(/(\d{2})\d+?$/, '$1')

		onQuantityMovieReceived(Number(formattedValue))
	}

	function handleChangeQuantityWithKeys(
		event: KeyboardEvent<HTMLInputElement>
	) {
		const keysType = ['ArrowUp', 'ArrowDown', 'Home', 'End']

		if (keysType.includes(event.key)) {
			event.preventDefault()

			handleKeys[event.key]()
		}
	}

	function handleInvalidQuantity() {
		if (quantityMovies === 0) {
			onQuantityMovieReceived(MIN)
		}
	}

	return (
		<Styled.NumberInput>
			<Styled.SpinButton
				type="button"
				disabled={quantityMovies === MIN}
				aria-label="Diminuir quantidade"
				title="Diminuir quantidade"
				onClick={onDecreaseQuantityMovie}
				tabIndex={-1}
			>
				<img src={minusIcon} alt="" />
			</Styled.SpinButton>
			<Styled.Input
				type="text"
				name="quantityMovie"
				aria-valuenow={quantityMovies}
				aria-valuemin={MIN}
				aria-valuemax={MAX}
				value={quantityMovies || ''}
				inputMode="decimal"
				pattern="[0-9]"
				onChange={handleChangeQuantity}
				onKeyDown={handleChangeQuantityWithKeys}
				onBlur={handleInvalidQuantity}
				role="spinbutton"
				aria-label="Quantidade de filmes"
			/>
			<Styled.SpinButton
				type="button"
				disabled={quantityMovies === MAX}
				aria-label="Aumentar quantidade"
				title="Aumentar quantidade"
				onClick={onIncreaseQuantityMovie}
				tabIndex={-1}
			>
				<img src={plusIcon} alt="" />
			</Styled.SpinButton>
		</Styled.NumberInput>
	)
}
