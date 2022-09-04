import { useCallback, useEffect, useState } from 'react'

import { AxiosError } from 'axios'

import { api } from 'services/api'

import { useCart } from 'hooks/useCart'

import { Button } from 'components/Button'
import { MovieCard } from 'components/MovieCard'
import { Spinner } from 'components/Spinner'

import * as Styled from './styles'

export type MovieProps = {
	id: number
	title: string
	price: number
	image: string
	quantity: number
}

export function Home() {
	const [movies, setMovies] = useState<MovieProps[]>([])
	const [errorWhenFetching, setErrorWhenFetching] = useState<AxiosError>()
	const [fetching, setFetching] = useState(true)

	const getMovies = useCallback(async () => {
		try {
			setErrorWhenFetching(undefined)
			setFetching(true)

			const response = await api.get<MovieProps[]>('/products')

			setErrorWhenFetching(undefined)
			setMovies(
				response.data.map((movie) => {
					return { ...movie, quantity: 1 }
				})
			)
		} catch (err) {
			setErrorWhenFetching(err as AxiosError)
		} finally {
			setFetching(false)
		}
	}, [])

	useEffect(() => {
		getMovies()
	}, [getMovies])

	const { addMovieToCart } = useCart()

	return (
		<Styled.Container>
			<Styled.MoviesWrapper>
				{movies.map((movie) => (
					<MovieCard
						key={movie.id}
						image={movie.image}
						title={movie.title}
						price={movie.price}
						onAddMovieToCart={() => addMovieToCart(movie)}
					/>
				))}
			</Styled.MoviesWrapper>
			{errorWhenFetching && (
				<Styled.FetchingErrorWrapper>
					<strong>Erro ao carregar os filmes.</strong>

					<Button type="button" onClick={getMovies}>
						Tentar novamente
					</Button>
				</Styled.FetchingErrorWrapper>
			)}
			{fetching && (
				<Styled.FetchingWrapper>
					<Spinner size={50} />
					<strong>Carregando filmes...</strong>
				</Styled.FetchingWrapper>
			)}
		</Styled.Container>
	)
}
