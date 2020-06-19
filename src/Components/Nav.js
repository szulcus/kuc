// BASIC
import React, { Component } from 'react'
import styled, {css, keyframes} from 'styled-components'
import {NavLink} from 'react-router-dom'
// IMAGES
import logo from '../Images/logo.png'

const Header = styled.div`
	display: flex;
	align-items: flex-end;
	padding: 30px;
	height: calc((100vw - 100px) * 0.4545 + 60px);
	max-height: 260px;
`
const Logo = styled.img`
	position: absolute;
	top: 30px;
	left: 30px;
	width: calc(100vw - 100px);
	max-width: 440px;
	z-index: 2;
`
const fadeIn = keyframes`
	from {
		transform: translateY(-100%)
	}
	to {
		transform: translateX(0)
	}
`
const MobileList = styled.div`
	animation: ${fadeIn} 0.3s ease;
`
const stretch = keyframes`
	from {
		opacity: 0;
		width: 0%;
	}
	to {
		opacity: 1;
		width: 100%;
	}
	
`
const NavComponent = styled.nav`
	position: sticky;
	top: 0;
	width: 0%;
	height: calc((100vw - 100px) * 0.1204545);
	max-height: 53px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	background-color: var(--color-main);
	color: var(--color-bg);
	text-transform: uppercase;
	z-index: 2;
	animation: ${stretch} 1s both;
	@media (min-width: 1000px) {
		padding-right: 50px;
	}
`
const fade = keyframes`
	from {
		opacity: 0;
		transform: translateX(-50px)
	}
	to {
		opacity: 1;
		transform: translateX(0)
	}
`
const Main = styled.div``
const NavList = styled.ul`
	width: 530px;
	display: flex;
	justify-content: space-between;
	list-style: none;
	letter-spacing: 1px;
`
const Go = styled(NavLink)`
	position: relative;
	color: var(--color-bg);
	padding: 7px 0px;
	transition: letter-spacing 0.2s ease;
	opacity: 0;
	transform: translateX(-50px);
	::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0px;
		display: block;
		width: 0%;
		height: 2px;
		transition: width 0.4s ease;
	}
	:nth-child(1) {
		animation: ${fade} 0.3s 0.8s both;
	}
	:nth-child(2) {
		animation: ${fade} 0.4s 0.8s both;
	}
	:nth-child(3) {
		animation: ${fade} 0.5s 0.8s both;
	}
	:nth-child(4) {
		animation: ${fade} 0.6s 0.8s both;
	}
	:nth-child(5) {
		animation: ${fade} 0.7s 0.8s both;
	}
	:hover {
		@media (hover: hover) {
			/* color: bggray; */
			letter-spacing: 2px;
		}
		::after {
			width: 100%;
			background-color: var(--color-bg);
			opacity: 0.7;
		}
	}
	&.active {
		${props =>
			props.show === 'true' &&
			css`
				::after {
					width: 100%;
					background-color: var(--color-bg);
					opacity: 0.7;
				}
			`
		};
	}
`
const NavListItem = styled.li`
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
	position: absolute;
	top: 13px;
	right: 13px;
	width: 35px;
	height: 26px;
	transition: all 0.5s ease;
	transform-origin: center;
	z-index: 5;
	animation: ${fade} 0.5s 0.8s both;
	:hover {
		cursor: pointer;
	}
	
	${props =>
		props.active === "true" &&
		css`
			${Line} {
				:nth-child(1) {
					transform: rotate(45deg);
				}
				:nth-child(2) {
					opacity: 0;
					transform: translateX(-50%);
				}
				:nth-child(3) {
					transform: rotate(-45deg);
				}
			}
		`
	}
`

class Nav extends Component {
	state = {
		underline: true,
		width: window.innerWidth,
		showList: false,
		hideList: true
	}
	componentDidMount() {
		window.addEventListener('resize', () => {
			this.setState({width: window.innerWidth})
		})
	}
	clearUnderline = () => {
		this.setState({underline: false})
	}
	writeUnderline = () => {
		this.setState({underline: true})
	}
	render() {
		return (
			<>
				<Header>
					<NavComponent>
						<Main>
							{this.state.width >= 1200 ? <NavList>
								<Go exact to="/" show={this.state.underline.toString()} onMouseOver={this.clearUnderline} onMouseLeave={this.writeUnderline}>
									<NavListItem>
										O nas
									</NavListItem>
								</Go>
								<Go exact to="/galeria" show={this.state.underline.toString()} onMouseOver={this.clearUnderline} onMouseLeave={this.writeUnderline}>
									<NavListItem>
										Galeria
									</NavListItem>
								</Go>
								<Go exact to="/oferta" show={this.state.underline.toString()} onMouseOver={this.clearUnderline} onMouseLeave={this.writeUnderline}>
									<NavListItem>
										Oferta
									</NavListItem>
								</Go>
								<Go exact to="/promocje" show={this.state.underline.toString()} onMouseOver={this.clearUnderline} onMouseLeave={this.writeUnderline}>
									<NavListItem>
										Promocje
									</NavListItem>
								</Go>
								<Go exact to="/kontakt" show={this.state.underline.toString()} onMouseOver={this.clearUnderline} onMouseLeave={this.writeUnderline}>
									<NavListItem>
										Kontakt
									</NavListItem>
								</Go>
							</NavList> : this.state.width >= 640 ? <Hamburger active={this.props.showMenu.toString()} onClick={this.props.changeMenu}>
								<Line position="top" />
								<Line position="center" />
								<Line position="bottom" />
							</Hamburger> : ''}
						</Main>
					</NavComponent>
					<Logo src={logo} />
				</Header>
			</>
		);
	}
}

export default Nav