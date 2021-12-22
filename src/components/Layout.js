// ./client/src/components/Layout.js

import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
	return (
		<div>
			<header>
				Este es el header
			</header>

			<Outlet />

		</div>
	)
}
