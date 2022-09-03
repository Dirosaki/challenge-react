import { useCallback, useEffect, useState } from 'react'

import { AxiosError } from 'axios'

import { api } from 'services/api'

import { Button } from 'components/Button'
import { MovieCard } from 'components/MovieCard'
import { Spinner } from 'components/Spinner'

import * as Styled from './styles'

type MoviesProps = {
	id: number
	title: string
	price: number
	image: string
}

export function Home() {
	const [movies, setMovies] = useState<MoviesProps[]>([])
	const [errorWhenFetching, setErrorWhenFetching] = useState<AxiosError>()
	const [fetching, setFetching] = useState(true)

	const getMovies = useCallback(async () => {
		try {
			setErrorWhenFetching(undefined)
			setFetching(true)

			const response = await api.get('/products')

			setErrorWhenFetching(undefined)
			setMovies(response.data)
		} catch (err) {
			setErrorWhenFetching(err as AxiosError)
		} finally {
			setFetching(false)
		}
	}, [])

	useEffect(() => {
		getMovies()
	}, [getMovies])

	return (
		<Styled.Container>
			<Styled.MoviesWrapper>
				{movies.map((movie) => (
					<MovieCard
						key={movie.id}
						// id={movie.id}
						image={movie.image}
						title={movie.title}
						price={movie.price}
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
