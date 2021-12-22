// ./client/src/components/SingleGlasses.js

import React, { useState, useEffect, useContext } from 'react'
import { Outlet } from 'react-router-dom'

import { useParams } from 'react-router-dom'

import GlassesContext from '../context/Glasses/GlassesContext'


export default function SingleGlasses() {

	const params = useParams()
	const pageID = params.id

	// GLOBAL
	const ctx = useContext(GlassesContext)
	const {
		checkoutURL,
		getCheckoutSession,
		singleGlasses,
		getSingleGlasses 
	} = ctx 

	useEffect(() => {
		getSingleGlasses(pageID)
	}, [])



	// useEffect(() => {
	// 	setUrl(checkoutURL)
	// }, [ checkoutURL ])

	useEffect(() => {
		if (checkoutURL) window.location.href = checkoutURL
		
	}, [ checkoutURL ])


	const handleClick = async (e) => {
		
		e.preventDefault()

		await getCheckoutSession(singleGlasses.precioID)

	}

	return (
		<div>

			<img src={singleGlasses.img} />
			<h1>{singleGlasses.nombre}</h1>
			<p>{singleGlasses.descripcion}</p>

			<button onClick={ (e) => { handleClick(e) }}>
				Pagar
			</button>

		</div>
	)
}
