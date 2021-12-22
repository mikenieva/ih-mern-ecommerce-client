// ./client/src/context/Glasses/GlassesState.js

import { useReducer } from 'react'
import GlassesContext from './GlassesContext'
import GlassesReducer from './GlassesReducer'

import axiosClient from '../../config/axios'


const GlassesState = props => {

	const initialState = {
		listGlasses: [],
		singleGlasses: {
			_id: "",
			nombre: "",
			color: "",
			descripcion: "",
			precioID: "",
			productoID: "",
			img: ""
		},
		checkoutURL: ""
	}

	const [globalState, dispatch]	= useReducer(GlassesReducer, initialState)	


	const getListGlasses = async () => {

		const res = await axiosClient.get("glasses/getall")

		dispatch({
			type: "GET_ALL_GLASSES",
			payload: res.data.data
		})

	}

	const getSingleGlasses = async (id) => {

		const res = await axiosClient.get(`glasses/getone/${id}`)

		dispatch({
			type: "GET_SINGLE_GLASSES",
			payload: res.data.data
		})

	}

	const getCheckoutSession = async (precioID) => {

		const quantity = 1

		const form = {
			cart: [{
				quantity,
				price:  precioID
			}]
		}

		const res = await axiosClient.post("checkout/create-checkout-session", form)

			
		dispatch({

			type: "CREATE_CHECKOUT_SESSION",
			payload: res.data.session.url // URL DE CHECKOUT DE STRIPE

		})

	}




	return (
		<GlassesContext.Provider
			value={{
				listGlasses: globalState.listGlasses,
				singleGlasses: globalState.singleGlasses,
				checkoutURL: globalState.checkoutURL,
				getListGlasses,
				getSingleGlasses,
				getCheckoutSession
			}}
		>
			{props.children}
		</GlassesContext.Provider>
	)


}


export default GlassesState


