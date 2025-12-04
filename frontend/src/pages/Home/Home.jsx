import React, { useState, useEffect } from 'react'
import Loader from '../../components/Loader/Loader'
import './Home.css'
import Logocollections from "../../assets/clublogos/clublogos.svg"

export default function Home() {
	/*
	No loader till deployment. It wastes time and annoys me
	
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => setLoading(false), 2000)
		return () => clearTimeout(timer)
	}, [])

	if (loading) {
		return <Loader />
	}
	*/
	return (
		<section id="home" className="home-hero">
			<div className="page-head flex  font-[Poppins]">
				<div className='hero-div' >
					<h1 className="blue-hero hero">A Place</h1>
					<h1 className="blue-hero hero">Where Every</h1>
					<h1 className="blue-hero hero">Club Finds a</h1>
					<h1 className="gray-hero hero">Home</h1>
					<div>
						<p className='line1'>
							A one-stop solution to all the announcement and 
						</p>
						<p className='line1'>
							notification clutter from clubs across campus.
						</p>
						<p className='line2'>
							Now Made Easier than Ever Before!
						</p>
						<p>

						</p>
						<div className='flex hero-btn-div'>
							<button className='hero-btn'>ANNOUNCEMENTS</button>
							<button className='hero-btn'>ALL CLUBS</button>
						</div>
					</div>
				</div>
				<div>
					<img className='w-[70vw] clubCollection' src={Logocollections} alt="" />
				</div>
			</div>
		</section>
	)
}