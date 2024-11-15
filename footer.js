import React from 'react';
import { CiTwitter } from "react-icons/ci";
import { RxInstagramLogo } from "react-icons/rx";
import { TbBrandYoutube } from "react-icons/tb";
import { TiSocialFacebook } from "react-icons/ti";
import './footer.css';
const Footer = () => {
    return (
        <>
        <div className='footer'>
            <div className='container'>
                <div className='about'>
                    <div className='logo'>
                        <img src='./img/Amazon.png' alt='Logo' />
                    </div>
                    <div className='detail'>
                        <p>We are a team of designers and developers that create high quality Wordpress. </p>
                        <div className='icon'>
                            <li><TiSocialFacebook /></li>
                            <li><RxInstagramLogo /></li>
                            <li><CiTwitter /></li>
                            <li><TbBrandYoutube /></li>
                        </div>
                    </div>
                </div>
                <div className='account'>
                    <h3>My Account</h3>
                    <ul>
                        <li>Acount</li>
                        <li>Oder</li>
                        <li>Cart</li>
                        <li>Shipping</li>
                        <li>Return</li>
                    </ul>
                </div>
                <div className='page'>
                    <h3>Pages</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Terma & Condition</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer