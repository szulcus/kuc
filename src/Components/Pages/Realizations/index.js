// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'

const SaleComponent = styled.div`
	padding: 20px;
`

class Sale extends Component {
	render() {
		return (
			<SaleComponent>
				<h2>Promocje</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut quia, tempore quam ut quos in harum! Maiores dolorem quisquam, laborum porro ipsa totam incidunt sint, dicta dignissimos optio magni assumenda!</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut quia, tempore quam ut quos in harum! Maiores dolorem quisquam, laborum porro ipsa totam incidunt sint, dicta dignissimos optio magni assumenda!</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut quia, tempore quam ut quos in harum! Maiores dolorem quisquam, laborum porro ipsa totam incidunt sint, dicta dignissimos optio magni assumenda!</p>
			</SaleComponent>
		);
	}
}

export default Sale