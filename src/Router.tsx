import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from 'layouts/DefaultLayout'

import { Cart } from 'pages/Cart'
import { Home } from 'pages/Home'
import { PurchaseRealized } from 'pages/PurchaseRealized'

export function Router() {
	return (
		<Routes>
			<Route element={<DefaultLayout />}>
				<Route index element={<Home />} />
				<Route path="/carrinho" element={<Cart />} />
				<Route path="/compra-realizada" element={<PurchaseRealized />} />
			</Route>
		</Routes>
	)
}
