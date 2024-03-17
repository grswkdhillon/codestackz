import carouselImg from '/images/cai5.jpeg'
import { Link } from 'react-router-dom';
import './carousel.css'
const Carousel = () => {
    return (
        <>
            <div id="carouselDiv">
                <div className='row ' style={{ height: "100%" }}>
                    <div className="col-md-12 d-block d-lg-none p-0">
                        <div className='mx-auto ' style={{ width: "100%", height: "100%", backgroundImage: `url(${carouselImg})`, backgroundSize: "cover", backgroundPositionX: "center", backgroundRepeat: "no-repeat", filter: "blur(10px)" }}>
                        </div>
                        <div style={{ position: "absolute", top: "53%", left: "50%", transform: "translate(-50%, -50%)", zIndex: "4" }}>
                            <h1 className='fw-bold mb-4' style={{ textShadow: "3px 3px 4px white" }}>Web Designing and Mobile App Development Company</h1>
                            <p className='fw-bold fs-5 mb-xl-5 mb-lg-3 d-none d-sm-block'>Embrace innovation and elevate your company's trajectory with our specialized development solutions.</p>
                            <button className='btn btn-lg btn-success border rounded-5 px-xl-5 px-lg-4'>Seek A Consultation</button>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6 p-0 my-auto d-none d-lg-block ">
                        <div className="mx-auto ms-lg-auto me-lg-5 p-md-4" style={{ width: "70%", color: "white" }}>
                            <h1 className='fw-bold mb-4'>Web Designing and Mobile App Development Company</h1>
                            <p className='fw-bold fs-5 mb-xl-5 mb-lg-3 d-none d-sm-block'>Embrace innovation and elevate your company's trajectory with our specialized development solutions.</p>
                            <Link className='btn btn-lg btn-success border rounded-5 px-xl-5 px-lg-4 bg-white' style={{ color: "#FE7A36 " }} to={'/contactus'}>Seek a Consultation</Link>
                        </div>
                    </div>
                    <div className="col-lg-6 p-0 d-none d-lg-block">
                        <div className='' style={{ width: "100%", height: "100%", backgroundImage: `url(${carouselImg})`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}>

                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Carousel;