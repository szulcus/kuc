// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'

const OfferComponent = styled.div`
	padding: 20px;
`

class Offer extends Component {
	render() {
		return (
			<OfferComponent>
				<h2>Offer</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut quia, tempore quam ut quos in harum! Maiores dolorem quisquam, laborum porro ipsa totam incidunt sint, dicta dignissimos optio magni assumenda!</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut quia, tempore quam ut quos in harum! Maiores dolorem quisquam, laborum porro ipsa totam incidunt sint, dicta dignissimos optio magni assumenda!</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut quia, tempore quam ut quos in harum! Maiores dolorem quisquam, laborum porro ipsa totam incidunt sint, dicta dignissimos optio magni assumenda!</p>
			</OfferComponent>
		);
	}
}

export default Offer