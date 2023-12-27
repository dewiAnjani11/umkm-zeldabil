import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Colors from '../Components/Colors'
import Header from '../Components/Header'

export default function Home() {
    const isMobile = useMediaQuery({maxWidth: 426})
    const isTable = useMediaQuery({maxWidth : 769})
  return (
    <div className='' style={{
        marginTop: isMobile? "25%" : isTable? "15%" :"10%"
    }}>
        <Header/>
        {/* hero section */}
        <div className='container-fluid'>
            <div id="carouselExampleAutoplaying" className="carousel slide container-fluid z-0" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%"
                    }} />
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%"
                    }} />
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%"
                    }} />
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="banner.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src="/banner.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src="/banner.png" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>

        {/* kategori */}
    </div>
  )
}
