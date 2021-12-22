// ./client/src/context/Glasses/GlassesReducer.js


const reducer = (globalState, action) => {

	switch(action.type){

		case "CREATE_CHECKOUT_SESSION":
			return {
				...globalState,
				checkoutURL: action.payload
			}

		case "GET_SINGLE_GLASSES":
			return {
				...globalState,
				singleGlasses: action.payload
			}

		case "GET_ALL_GLASSES":
			return {
				...globalState,
				listGlasses: action.payload
			}

		default:
			return globalState


	}


}

export default reducer