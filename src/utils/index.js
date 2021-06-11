import axios from "axios"

export const getData = async (url) => {
	try {
		const result = await axios.get(
		url,
		{ headers: { 'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
		'Access-Control-Allow-Origin': '*', // * или ваш домен
		'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE',
		'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' } }
		)
		return result
				
	}
	catch (error) {
		throw error
	}
}

