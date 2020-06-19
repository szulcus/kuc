// BASIC
import React, { Component } from 'react'
import styled from 'styled-components'
import {fu} from '../../../Config/firebase'
// IMAGES
import address from '../../../Images/address.png'
// ICONS
import {FaPhone} from 'react-icons/fa'

const ContactComponent = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
`
const Location = styled.div`
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
const ContactDetails = styled.div`
	width: 90vw;
	max-width: 1000px;
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
`
const Details = styled.div`
	@media (max-width: 900px) {
		width: 100%;
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
	}
`
const Address = styled.div`
	margin: 30px;
	:last-child {
		margin-bottom: 50px;
	}
	@media (max-width: 900px) {
		text-align: center;
	}
`
const Field = styled.div`
	font-weight: bold;
`
const Phone = styled(Field)`
	display: flex;
	align-items: center;
	font-weight: bold;
	color: var(--color-main);
	margin-top: 5px;
`
const Form = styled.form`
	width: 90vw;
	display: grid;
	grid-template-columns: repeat(2, 40vw);
	grid-gap: 5px;
	justify-content: center;
	@media (min-width: 900px) {
		width: 500px;
		grid-template-columns: repeat(2, 1fr);
	}
`
const Input = styled.input`
	font-size: 16px;
	border: 2px solid var(--color-main);
	padding: 5px;
	:focus {
		::placeholder {
			transition: all 0.2s ease;
			opacity: 0;
			transform: translateX(10px)
		}
	}
`
const Textarea = styled.textarea`
	width: 100%;
	min-height: 200px;
	grid-column: 1/3;
	padding: 5px;
	font-size: 16px;
	border: 2px solid var(--color-main);
	resize: none;
`
const Submit = styled.button`
	display: block;
	grid-column: 1/3;
	background-color: var(--color-main);
	color: var(--color-bg);
	font-size: 16px;
	padding: 5px;
	@media (hover: hover) {
		transition: all 0.2s ease;
		:hover {
			cursor: pointer;
			opacity: 0.7;
		}
	}
`

class Contact extends Component {
	render() {
		return (
			<ContactComponent>
				<Location src={address} />
				<ContactDetails>
					<Details>
						<Address>
							<Field>KUC Meble</Field>
							<Field>ul. Osiedlowa 2B</Field>
							<Field>32-800 Brzesko</Field>
							<Phone><FaPhone />&nbsp;123 456 789</Phone>
						</Address>
						<Address>
							<Field>KUC Meble</Field>
							<Field>ul. Osiedlowa 2B</Field>
							<Field>32-800 Brzesko</Field>
							<Phone><FaPhone />&nbsp;123 456 789</Phone>
						</Address>
						
					</Details>
					<Form
						id="contact-form"
						action="https://formspree.io/jakubzlezena@wp.pl	"
						method="POST"
					>
						<Input type="text" name="name" placeholder="Imię" />
						<Input type="text" name="email" placeholder="Email" />
						<Textarea name="message" placeholder="Co chcesz nam przekazać?"/>
						<Submit type="submit">Zatwierdź</Submit>
					</Form>
				</ContactDetails>
			</ContactComponent>
		);
	}
}

export default Contact