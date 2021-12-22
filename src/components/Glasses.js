// ./client/src/components/Glasses.js
import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import GlassesContext from '../context/Glasses/GlassesContext'



export default function Glasses() {

	// GLOBAL
	const ctx = useContext(GlassesContext)

	const {
		listGlasses,
		getListGlasses
	} = ctx


	useEffect(() => {
		
		getListGlasses()

	}, [])

	return (
		<>
			<ul>
				{
					listGlasses.map((e) => {
						return (
							<li>
								<h1>Nombre:{e.nombre}</h1>
								<p>PrecioID: {e.precioID}</p>
								<Link to={`/lentes/${e._id}`}>
									<button>
										Ver Detalles
									</button>
								</Link>
							</li>
						)
					})
				}	
			</ul>	
		</>
	)
}
