import {
	createContext,
	ReactNode,
	useCallback,
	useEffect,
	useMemo,
	useState,
} from 'react'

import { MovieProps } from 'pages/Home'

type CartContextType = {
	moviesInCart: MovieCartProps[]
	totalPrice: number
	quantityMoviesInCart: number
	addMovieToCart: (newMovie: MovieProps) => void
	removeMovieFromCart: (movieId: number) => void
	increaseMovieQuantityById: (movieId: number) => void
	decreaseMovieQuantityById: (movieId: number) => void
	changeMovieQuantityById: (movieId: number, newQuantity: number) => void
	clearCart: () => void
}

type CartContextProviderProps = {
	children: ReactNode
}

type MovieCartProps = MovieProps

const MOVIES_STORAGE_KEY = 'wefit-react:moviesInCart'

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
	const [moviesInCart, setMoviesInCart] = useState<MovieCartProps[]>(() => {
		const storedCart = localStorage.getItem(MOVIES_STORAGE_KEY)
		if (storedCart) {
			return JSON.parse(storedCart)
		}
		return []
	})

	useEffect(() => {
		localStorage.setItem(MOVIES_STORAGE_KEY, JSON.stringify(moviesInCart))
	}, [moviesInCart])

	const totalPrice = moviesInCart.reduce((total, movie) => {
		return total + movie.price * movie.quantity
	}, 0)

	const quantityMoviesInCart = moviesInCart.length

	const addMovieToCart = useCallback(
		(newMovie: MovieProps) => {
			const movieExistsInCart = moviesInCart.find(
				(movie) => movie.id === newMovie.id
			)

			if (movieExistsInCart) {
				setMoviesInCart((prevState) =>
					prevState.map((movie) => {
						if (movie.id === newMovie.id) {
							return { ...movie, quantity: movie.quantity + 1 }
						}
						return movie
					})
				)
			} else {
				setMoviesInCart((prevState) => [...prevState, newMovie])
			}
		},
		[moviesInCart]
	)

	const removeMovieFromCart = useCallback((movieId: number) => {
		setMoviesInCart((prevState) =>
			prevState.filter((movie) => movie.id !== movieId)
		)
	}, [])

	const increaseMovieQuantityById = useCallback((movieId: number) => {
		setMoviesInCart((prevState) =>
			prevState.map((movie) => {
				if (movie.id === movieId && movie.quantity < 99) {
					return { ...movie, quantity: movie.quantity + 1 }
				}

				return movie
			})
		)
	}, [])

	const decreaseMovieQuantityById = useCallback((movieId: number) => {
		setMoviesInCart((prevState) =>
			prevState.map((movie) => {
				if (movie.id === movieId && movie.quantity > 1) {
					return { ...movie, quantity: movie.quantity - 1 }
				}

				return movie
			})
		)
	}, [])

	const changeMovieQuantityById = useCallback(
		(movieId: number, newQuantity: number) => {
			setMoviesInCart((prevState) =>
				prevState.map((movie) => {
					if (movie.id === movieId) {
						return { ...movie, quantity: newQuantity }
					}
					return movie
				})
			)
		},
		[]
	)

	const clearCart = useCallback(() => {
		setMoviesInCart([])
	}, [])

	const context = useMemo(
		() => ({
			moviesInCart,
			totalPrice,
			quantityMoviesInCart,
			addMovieToCart,
			removeMovieFromCart,
			increaseMovieQuantityById,
			decreaseMovieQuantityById,
			changeMovieQuantityById,
			clearCart,
		}),
		[
			moviesInCart,
			totalPrice,
			quantityMoviesInCart,
			addMovieToCart,
			removeMovieFromCart,
			increaseMovieQuantityById,
			decreaseMovieQuantityById,
			changeMovieQuantityById,
			clearCart,
		]
	)

	return <CartContext.Provider value={context}>{children}</CartContext.Provider>
}
