import React from 'react'
import '../sassStyles/layout/footer.scss'
import ellieLogo from '../assets/icons/ellielogo1.png'
import facebook from '../assets/icons/facebook.png'
import instagram from '../assets/icons/instagram.png'
import twitter from '../assets/icons/twitter.png'
import linkedin from '../assets/icons/linkedin.png'


const Footer = () => {
    return (
        <div className="footer">

            <div className="footer_content_gridContainer">

                <div className="footer_content_box">

                    <div className="footer_content_title">
                        <img src={ellieLogo} alt="DreamDoor" />
                        <span className="footer_content_ellieName">Dream Door</span>
                        <span className="footer_content_your_castle">- Your Castle Is Your Home -</span>
                    </div>

                </div>

                <div className="footer_content_box two"><span className="blis">Buy <span>&#10045; </span>Let <span>&#10045; </span> Invest <span>&#10045; </span> Sell</span><br /><span>With Dreams, It Couldn't Be Easier</span></div>
                <div className="footer_content_box contact four">
                    <div className="contactInfo headOffice">
                        <span className="contactInfo_title">Head office:</span>
                        <span className="contactInfo_address">Surat</span>
                    </div>
                    <div className="contactInfo branch">
                        <span className="contactInfo_title">Contact a branch:</span>
                        <span className="contactInfo_address">Katargam</span>
                        <span className="contactInfo_address">Varachha</span>
                        <span className="contactInfo_address">Adajan</span>
                    </div>
                    
                
                </div>
                <div className="footer_content_box five">
                    <div>
                        <div className="footer_content_rules">
                            Dream Door Is A Official Liscened By The State Of India<br></br>
                            Dream Door abides by Equal Housing Opportunity laws.<br></br>
                            
                            {/* Changes in price, condition, sale or withdrawal may be made without notice.<br></br>
                            All measurements and square footage are approximate.<br></br> */}
                        </div>
                    </div>
                </div>
                <div className="footer_content_box six">
                    <div className="icons">
                        <div className="icon"><img src={facebook} alt="facebook" style={{ width: '40px' }} /></div>
                        <div className="icon"><img src={instagram} alt="Instagram" style={{ width: '40px' }} /></div>
                        <div className="icon"><img src={twitter} alt="Twitter" style={{ width: '40px' }} /></div>
                        <div className="icon"><img src={linkedin} alt="Linkedin" style={{ width: '40px' }} /></div>
                    </div>
                </div>
            </div>

            <div className="offices">

                <div className="office">
                    <div className="loc-address">DreamDoor<br />
                                101, Laxmi Enclave<br />
                        <div className="office_region">
                            <img alt="Surat_office" src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg" style={{ height: '12px' }} />&nbsp; 395004 Surat
                        </div>
                    </div>
                </div>
                <div className="office">
                    <div className="loc-address">DreamDoor<br />
                                11, Avalon Plaza<br />
                        <div className="office_region">
                            <img alt="Katargam_office" src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg" style={{ height: '12px' }} />&nbsp; 395004 Katargam
                        </div>
                    </div>
                </div>
                <div className="office">
                    <div className="loc-address">DreamDoor<br />
                                504, Rajhans Mall<br />
                        <div className="office_region">
                            <img alt="Varachha_office" src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg" style={{ height: '12px' }} />&nbsp; 395006 Varachha
                        </div>
                    </div>
                </div>
                <div className="office">
                    <div className="loc-address bern">DreamDoor<br />
                                133, Velocity Center<br />
                        <div className="office_region">
                            <img alt="Adajan_office" src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg" style={{ height: '12px' }} />&nbsp; 395009 Adajan
                        </div>
                    </div>
                </div>

            </div>
            <div className="allrightsreserved"> &copy;2023 Dream Door. All rights reserved.</div>
        </div>
    )
}

export default Footer