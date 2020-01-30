import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Container, NavLink, NavItem, Nav, Row, Col } from 'reactstrap';

export default class Footer extends Component {
	render() {
		return (
			<footer className='footer'>
				<Container>
					<Row>
						<Col md='3'>
							<h1 className='title'>Tempat-Can</h1>
						</Col>
						<Col md='3'>
							<Nav>
								<NavItem>
									<NavLink to='/' tag={Link}>
										Beranda
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink to='/tentang' tag={Link}>
										Tentang
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink to='/bantuan' tag={Link}>
										Bantuan
									</NavLink>
								</NavItem>
							</Nav>
						</Col>
						<Col md='3'>
							<Nav>
								<NavItem>
									<NavLink to='/kontak' tag={Link}>
										Kontak
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink to='/kerjasama' tag={Link}>
										Kerjasama
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink to='/pinjam' tag={Link}>
										Pinjam
									</NavLink>
								</NavItem>
							</Nav>
						</Col>
						<Col md='3'>
							<h3 className='title'>Copyright &copy;</h3>
							<div className='btn-wrapper profile'>
								<h4>2020 - Tim HRD.</h4>
							</div>
						</Col>
					</Row>
				</Container>
			</footer>
		);
	}
}
