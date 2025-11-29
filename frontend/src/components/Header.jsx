import React from 'react'
import logo from '../assets/google-developers.svg'

export default function Header({ title }) {
	return (
		<header className="header">
			<div className="header-inner">
				<img src={logo} alt="logo" className="title-logo" />
				<h1 className="section-title title-blue">{title}</h1>
			</div>
		</header>
	)
}

