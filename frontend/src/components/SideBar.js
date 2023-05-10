import React from 'react'
import '../sassStyles/layout/SideBar.scss'
import fulfillyourdream from '../assets/images/fulfillyourdreamimg2.jpg'
import fulfillyourdream2 from '../assets/images/fulfillyourdreamimg3.jpg'
import frenchproperty from '../assets/images/goodlife.jpg'
import magazine2 from '../assets/images/magazine2.jpg'

import NewsLetter from '../components/NewsLetter'
import { Tooltip } from 'react-tippy'
import 'react-tippy/dist/tippy.css'

const SideBar = () => {
    return (
        <div className="sidebar">

            <div className="sidebar_content"><NewsLetter /></div>
            <div className="sidebar_content2">
                <div className="recentlySold">Recently Sold Properties:</div>
                <div className="imageBox">
                    <div className="sidebarimg" ><img src={fulfillyourdream} alt="" /></div>
                    <div className="sidebartext"><span className="soldChateau">Madhuvan Villa</span><span className="soldPrice">2.4 CR</span></div>
                </div>

                <div className="imageBox">
                    <div className="sidebarimg"><img src={fulfillyourdream2} alt="" /></div>
                    <div className="sidebartext"><span className="soldChateau">La Cost Castle</span><span className="soldPrice">3.2 CR</span></div>
                </div>

                <div className="imageBox" >
                    <Tooltip title="The Good Life magazine" position="top" trigger="mouseenter" inertia="true" theme='light'>
                        <a href="https://www.gujaratsamachar.com/" target="blank">
                            <div className="sidebarimg" style={{ opacity: '1' }}><img src={frenchproperty} alt="" /></div>
                            <div className="sidebartext"><span className="soldChateau">Subscribe now!</span><span className="soldPrice">It's free!</span></div></a>
                    </Tooltip>
                </div>

                <div className="imageBox" >
                    <Tooltip title="Gujarat Property News Magazine" position="top" trigger="mouseenter" inertia="true" theme='light' >
                        <a href="https://designessentiamagazine.com/tag/surat/" target="blank">
                            <div className="sidebarimg" style={{ opacity: '1' }}><img src={magazine2} alt="" /></div>
                            <div className="sidebartext"><span className="soldChateau">Subscribe now!</span><span className="soldPrice">400₹ p/m</span></div></a>
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}
export default SideBar
