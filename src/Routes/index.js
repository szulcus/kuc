// Basic
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// Pages
import Nav from '../Components/Nav'
import About from '../Components/Pages/About'
import Offer from '../Components/Pages/Offer'
import Realizations from '../Components/Pages/Realizations'
import Gallery from '../Components/Pages/Gallery'
import Contact from '../Components/Pages/Contact'
import Footer from '../Components/Footer'
import MobileNav from '../Components/MobileNav';

class Routes extends Component {
	state = {
		showMenu: false,
		hideMenu: false
	}
	changeMenu = () => {
		if (this.state.showMenu) {
			this.setState({
				hideMenu: true
			});
			setTimeout(() => {
				this.setState({
					showMenu: false,
					hideMenu: false
				});
			}, 300)
		}
		else {
			this.setState({
				showMenu: true,
				hideMenu: false
			});
		}
	}
	render() {
		return (
			<Router>
				<Nav changeMenu={this.changeMenu} showMenu={this.state.showMenu} hideMenu={this.state.hideMenu} />
				<MobileNav changeMenu={this.changeMenu} showMenu={this.state.showMenu} hideMenu={this.state.hideMenu} />
				<Switch>
					<Route exact path="/" component={About}/>
					<Route path="/galeria" component={Gallery}/>
					<Route path="/oferta" component={Offer}/>
					<Route path="/promocje" component={Realizations}/>
					<Route path="/kontakt" component={Contact}/>
				</Switch>
				<Footer />
			</Router>
		);
	}
}

export default Routes