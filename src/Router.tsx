import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from 'layouts/DefaultLayout'

export function Router() {
	return (
		<Routes>
			<Route element={<DefaultLayout />}>
				<Route index element={<h1>Home</h1>} />
				<Route path="/carrinho" element={<h1>Carrinho</h1>} />
				<Route path="/compra-realizada" element={<h1>Compra Realizada</h1>} />
			</Route>
		</Routes>
	)
}
