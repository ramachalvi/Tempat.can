import React, { Component } from 'react';

import Navigasi from './Components/TampilanAwal/Navigasi';
import Header from './Components/TampilanAwal/HeaderBeranda';
import Footer from './Components/TampilanAwal/Footer';

export default class Beranda extends Component {
	componentDidMount() {
		document.body.classList.toggle('index-page');
	}
	componentWillUnmount() {
		document.body.classList.toggle('index-page');
	}

	render() {
		return (
			<div>
				<Navigasi />
				<div className='wrapper'>
					<Header />
					<Footer />
				</div>
			</div>
		);
	}
}
