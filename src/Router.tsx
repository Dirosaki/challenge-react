import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from 'layouts/DefaultLayout'

import { Cart } from 'pages/Cart'
import { Home } from 'pages/Home'

export function Router() {
	return (
		<Routes>
			<Route element={<DefaultLayout />}>
				<Route index element={<Home />} />
				<Route path="/carrinho" element={<Cart />} />
				<Route path="/compra-realizada" element={<h1>Compra Realizada</h1>} />
			</Route>
		</Routes>
	)
}
