import React, { Component } from 'react';
import { Container, Row, Button } from "reactstrap";
import Navigasi from './TampilanAwal/Navigasi';
import Footer from './TampilanAwal/Footer';
export default class Tentang extends Component {

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
							{/* img bagian clone beranda */}

							<div className="content-center brand">
								<Row className="text-center">
									<Container>
										<h1 className="h1-seo">
											<span className="text-white">Tentang Kami</span>
										</h1>
										<Button
											className="btn-link"
											color="success"
											onClick=''
										>
											<p className="category text-success">Liat dong</p>
											<i className="tim-icons icon-minimal-down" />
										</Button>
									</Container>
								</Row>

								<br />
								<h1 style={{ marginBottom: 20 }}>Marg</h1>
							</div>
						</div>
					</div>
					<Footer />
				</div>
			</div>
		);
	}
}