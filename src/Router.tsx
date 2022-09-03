import { Routes, Route } from 'react-router-dom'

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<h1>Home</h1>} />
			<Route path="/carrinho" element={<h1>Carrinho</h1>} />
			<Route path="/compra-realizada" element={<h1>Compra Realizada</h1>} />
		</Routes>
	)
}
