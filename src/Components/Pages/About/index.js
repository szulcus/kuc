// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'

const AboutComponent = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
`
const Slider = styled.div`
	width: 90vw;
	max-width: 1000px;
	height: 300px;
	margin: 0 0 30px 0;
	background: url("${props => props.src}") no-repeat center center;
	background-size: cover;
	@media (min-width: 540px) {
		height: 400px;
		margin: 10px 0 30px 0;
	}
`
const Image = styled.img``
const Title = styled.h1`
	margin: 10px 0;
`
const Letter = styled.span`
	color: var(--color-main);
`
const Decsription = styled.p`
	max-width: 1000px;
	text-align: center;
`

class About extends Component {
	state = {
		image: 'https://picsum.photos/2000/800'
	}
	render() {
		return (
			<AboutComponent>
				<Slider src={this.state.image} />
				<Title><Letter>D</Letter>rodzy <Letter>K</Letter>lienci,</Title>
				<Decsription>Mija już 10 lat istnienia firmy KUC. Dużo to i mało w życiu naszego przedsiębiorstwa. Jest nam niezmiernie miło, że nasze produkty zyskały przez ten czas szeroką rzeszę nabywców. Na wytworzenie każdego elementu poświęcamy wiele energii i czasu, aby spełniał on wszystkie oczekiwania swoich użytkowników. Dziękujemy za zaufanie oraz życzymy owocnej współpracy.</Decsription>
			</AboutComponent>
		);
	}
}

export default About