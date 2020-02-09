import React, { Component } from 'react';
import { Container, Row } from "reactstrap";
import Navigasi from './TampilanAwal/Navigasi';
import Footer from './TampilanAwal/Footer';

export default class Kerjasama extends Component {
	componentDidMount() {
		document.body.classList.toggle("landing-page");
	}
	componentWillUnmount() {
		document.body.classList.toggle("landing-page");
	}

	render() {
		return (
			<div>
				<Navigasi />
				<div className='wrapper'>
					<div className="wrapper">
						<div className="page-header">
							<img
								alt="..."
								className="path"
								src={require("../Assets/img/blob.png")}
							/>
							<img
								alt="..."
								className="path2"
								src={require("../Assets/img/path5.png")}
							/>
							<img
								alt="..."
								className="shapes triangle"
								src={require("../Assets/img/triunghiuri.png")}
							/>
							<img
								alt="..."
								className="shapes wave"
								src={require("../Assets/img/waves.png")}
							/>
							<img
								alt="..."
								className="shapes squares"
								src={require("../Assets/img/patrat.png")}
							/>
							<img
								alt="..."
								className="shapes circle"
								src={require("../Assets/img/cercuri.png")}
							/>

							<div className="content-center brand">
								<Row className="text-center">
									<Container>
										<h1 className="h1-seo">
											<span className="text-white">Kerjasama</span>
										</h1>
									</Container>
								</Row>
							</div>
						</div>
					</div>
					<Footer />
				</div>
			</div>
		);
	}
}