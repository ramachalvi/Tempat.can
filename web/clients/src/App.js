import React from 'react';
import { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Beranda from './Beranda';
import Tentang from './Components/Tentang';
import Bantuan from './Components/Bantuan';
import Kerjasama from './Components/Kerjasama';
import Kontak from './Components/Kontak';
import Pinjam from './Components/Pinjam';

import './Assets/css/nucleo-icons.css';
import './Assets/css/style.css';
import './Assets/demo/demo.css';

export default class App extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<Switch>
						<Route
							path='/pinjam'
							render={props => <Pinjam {...props} />}
						/>
						<Route
							path='/kerjasama'
							render={props => <Kerjasama {...props} />}
						/>
						<Route
							path='/kontak'
							render={props => <Kontak {...props} />}
						/>
						<Route
							path='/tentang'
							render={props => <Tentang {...props} />}
						/>
						<Route
							path='/bantuan'
							render={props => <Bantuan {...props} />}
						/>
						<Route
							path='/'
							render={props => <Beranda {...props} />}
						/>
					</Switch>{' '}
					<Redirect from='/' to='/beranda' />
				</BrowserRouter>{' '}
			</div>
		);
	}
}
