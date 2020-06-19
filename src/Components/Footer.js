// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
import {FaFacebookSquare, FaFacebookMessenger} from 'react-icons/fa'

const FooterComponent = styled.footer`
	padding: 20px;
	background-color: var(--color-main);
	text-align: center;
	margin-top: 50px;
	color: var(--color-bg);
`
const SocialMedia = styled.div``
const BrowserLink = styled.a`
	color: var(--color-bg);
	font-size: 25px;
	margin: 10px;
	@media (hover: hover) {
		transition: all 0.2s ease;
		:hover {
			opacity: 0.7;
		}
	}
`
const Copyright = styled.div`
	margin: 10px;
`

class Footer extends Component {
	render() {
		return (
			<FooterComponent>
				<SocialMedia>
					<BrowserLink href="https://www.facebook.com/KUC-Meble-1564470077147523/" target="_blank">
						<FaFacebookSquare />
					</BrowserLink>
					<BrowserLink href="https://m.me/1564470077147523" target="_blank">
						<FaFacebookMessenger />
					</BrowserLink>
				</SocialMedia>
				<Copyright>KUC Meble 2020 &copy;</Copyright>
			</FooterComponent>
		);
	}
}

export default Footer