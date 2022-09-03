import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from 'layouts/DefaultLayout'

import { Home } from 'pages/Home'

export function Router() {
	return (
		<Routes>
			<Route element={<DefaultLayout />}>
				<Route index element={<Home />} />
				<Route path="/carrinho" element={<h1>Carrinho</h1>} />
				<Route path="/compra-realizada" element={<h1>Compra Realizada</h1>} />
			</Route>
		</Routes>
	)
}
