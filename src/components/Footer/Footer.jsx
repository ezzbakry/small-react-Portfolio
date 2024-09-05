import { Component } from "react";
import myStyle from './Footer.module.css'
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
export default class Foot extends Component {
    constructor() {
        super()

    }
    render() {
        return <>
            <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>

                    <div className='me-5  d-block'>
                        <span>Get connected with us on social networks:</span>
                    </div>

                    <div>
                        <a href='' className='me-4 text-reset'>
                            {/* <MDBIcon fab icon="facebook-f" /> */}
                            <FaFacebook />

                        </a>
                        <a href='' className='me-4 text-reset'>
                            <FaTwitter />

                        </a>

                        <a href='' className='me-4 text-reset'>
                            <CiInstagram />

                        </a>
                        <a href='' className='me-4 text-reset'>
                            <FaLinkedin />

                        </a>
                        <a href='https://github.com/ezzbakry' className='me-4 text-reset'>
                            <FaGithub />


                        </a>
                    </div>
                </section>

                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    <MDBIcon icon="gem" className="me-3" />
                                    Education
                                </h6>
                                <p>
                                    Faculty of Computers and Information, Assiut University
                                </p>
                            </MDBCol>

                            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Technical Skills</h6>
                                <p>
                                    <a href='#!' className='text-reset' style={{ textDecoration: "none" }}>
                                        Html
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset' style={{ textDecoration: "none" }}>
                                        React
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset' style={{ textDecoration: "none" }}>
                                        CSS
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset' style={{ textDecoration: "none" }}>
                                        JavaScript
                                    </a>
                                </p>
                            </MDBCol>


                            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                <p >
                                    <FaHome style={{ margin: "10px" }} />

                                    Assiut, Egypt
                                </p>
                                <p>
                                    <MdEmail style={{ margin: "10px" }} />



                                    ezz@example.com
                                </p>
                                <p>
                                <FaPhoneAlt style={{ margin: "10px" }} />

                                
                                + 01 234 567 88
                                </p>
                                <p>
                                <FaPhoneAlt style={{ margin: "10px" }} />
                                + 01 234 567 89
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>

                    <a className='text-reset fw-bold' href='' style={{ textDecoration: "none" }}>
                        React
                    </a>
                </div>
            </MDBFooter>

        </>
    }
}