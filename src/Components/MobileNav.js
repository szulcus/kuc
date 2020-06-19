// BASIC
import React, { Component } from 'react'
import styled, {css, keyframes} from 'styled-components'
import {NavLink} from 'react-router-dom'

const showView = keyframes`
	from {
		transform: translateY(-100%);
	}
	to {
		transform: translateY(0);
	}
`
const hideView = keyframes`
	from {
		transform: translateY(0);
	}
	to {
		transform: translateY(-100%);
	}
`
const View = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	z-index: 2;
	background-color: var(--color-main);
	opacity: 0.8;
	animation: ${showView} 0.3s both;
	${props =>
		props.hide === "true" &&
		css`
			animation: ${hideView} 0.3s both;
		`
	};
`
const MenuList = styled.ul`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	height: 50vh;
	min-height: 350px;
	list-style: none;
`
const show = keyframes`
	from {
		opacity: 0;
		transform: scale(0.5);
	}
	50% {
		opacity: 1;
		transform: scale(1.1);
	}
	to {
		opacity: 1;
		transform: scale(1);
	}
`
const ListItem = styled.li`
	text-transform: uppercase;
	font-size: 30px;
	color: var(--color-bg);
`
const Go = styled(NavLink)`
	opacity: 0;
	@media (hover: hover) {
		transition: all 0.1s ease;
		:hover {
			letter-spacing: 3px;
		}
	}
	:nth-child(1) {
		animation: ${show} 0.2s 0.3s both;
	}
	:nth-child(2) {
		animation: ${show} 0.3s 0.3s both;
	}
	:nth-child(3) {
		animation: ${show} 0.4s 0.3s both;
	}
	:nth-child(4) {
		animation: ${show} 0.5s 0.3s both;
	}
	:nth-child(5) {
		animation: ${show} 0.6s 0.3s both;
	}
	&.active {
		letter-spacing: 3px;
		color: pink;
		${ListItem} {
			::after, ::before {
				content: '-';
				margin: 10px;
			}
		}

		/* color: var(--color-main-opacity); */
		/* ::after {
			content: '';
			position: absolute;
			left: 0;
			bottom: -5px;
			display: block;
			width: 0%;
			height: 3px;
			transition: width 0.4s ease;
			width: 100%;
			background-color: var(--color-bg);
			opacity: 0.7;
		} */
	}
`
const MobileNavComponent = styled.div`
	position: fixed;
	bottom: 20px;
	right: 20px;
	width: 60px;
	height: 60px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--color-main);
	border-radius: 100%;
	opacity: 0;
	z-index: 2;
	animation: ${show} 0.3s 0.8s both;
	/* border: 1px solid var(--color-bg); */
	/* box-shadow: 0 0 10px pink; */
`
const Line = styled.div`
	position: absolute;
	width: 100%;
	height: 2px;
	background-color: var(--color-bg);
	transition: all 0.2s ease;
	:nth-child(1) {
		transform-origin: top left;
		top: 0;
	}
	:nth-child(2) {
		top: calc(50% - 1px);
		width: 70%;
	}
	:nth-child(3) {
		transform-origin: bottom left;
		bottom: 0;
	}
`
const Hamburger = styled.div`
	position: relative;
	width: 25px;
	height: 26px;
	transition: all 0.5s ease;
	transform-origin: center;
	z-index: 5;
	:hover {
		cursor: pointer;
	}
	
	${props =>
		props.active === "true" &&
		css`
			${Line} {
				:nth-child(1) {
					transform: rotate(45deg) translateX(5px);
				}
				:nth-child(2) {
					opacity: 0;
					transform: translateX(-50%);
				}
				:nth-child(3) {
					transform: rotate(-45deg) translateX(5px);
				}
			}
		`
	}
`

class MobileNav extends Component {
	state = {
		width: window.innerWidth,
		showList: false,
		hideList: true
	}
	componentDidMount() {
		window.addEventListener('resize', () => {
			this.setState({width: window.innerWidth})
		})
	}
	render() {
		return (
			<>
				{(this.props.showMenu || this.props.hideMenu) && <View hide={this.props.hideMenu.toString()}>
					<MenuList>
						<Go exact to="/" onClick={this.props.changeMenu}>
							<ListItem>
								O nas
							</ListItem>
						</Go>
						<Go exact to="/galeria" onClick={this.props.changeMenu}>
							<ListItem>
								Galeria
							</ListItem>
						</Go>
						<Go exact to="/oferta" onClick={this.props.changeMenu}>
							<ListItem>
								Oferta
							</ListItem>
						</Go>
						<Go exact to="/promocje" onClick={this.props.changeMenu}>
							<ListItem>
								Promocje
							</ListItem>
						</Go>
						<Go exact to="/kontakt" onClick={this.props.changeMenu}>
							<ListItem>
								Kontakt
							</ListItem>
						</Go>
					</MenuList>
				</View>}
				{(this.state.width < 640 || (this.props.showMenu && !this.props.hideMenu)) && <MobileNavComponent>
					<Hamburger active={this.props.showMenu.toString()} onClick={this.props.changeMenu}>
						<Line position="top" />
						<Line position="center" />
						<Line position="bottom" />
					</Hamburger>
				</MobileNavComponent>}
			</>
		);
	}
}

export default MobileNav