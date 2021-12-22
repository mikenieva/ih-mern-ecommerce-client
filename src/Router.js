// ./client/src/components/Router.js

import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Layout from './components/Layout'
import Home from './components/Home'
import Glasses from './components/Glasses'
import SingleGlasses from './components/SingleGlasses'

import GlassesState from './context/Glasses/GlassesState'


const Router = () => {

	return (
		<GlassesState>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={ <Home /> } />
					<Route path="lentes" element={ <Glasses /> } />
					<Route path="lentes/:id" element={ <SingleGlasses /> } />
				</Route>
			</Routes>
	
		</BrowserRouter>
		</GlassesState>
		

	)



}

export default Router