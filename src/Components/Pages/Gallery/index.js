// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'

const GalleryComponent = styled.div`
	
`

class Gallery extends Component {
	render() {
		return (
			<GalleryComponent>
				<h2>Galeria</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut quia, tempore quam ut quos in harum! Maiores dolorem quisquam, laborum porro ipsa totam incidunt sint, dicta dignissimos optio magni assumenda!</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut quia, tempore quam ut quos in harum! Maiores dolorem quisquam, laborum porro ipsa totam incidunt sint, dicta dignissimos optio magni assumenda!</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut quia, tempore quam ut quos in harum! Maiores dolorem quisquam, laborum porro ipsa totam incidunt sint, dicta dignissimos optio magni assumenda!</p>
			</GalleryComponent>
		);
	}
}

export default Gallery