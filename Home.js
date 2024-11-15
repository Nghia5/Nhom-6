import React, { useState } from 'react';
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BsArrowRight, BsEye } from "react-icons/bs";
import { CiDollar } from "react-icons/ci";
import { FaHeadphones } from "react-icons/fa";
import { FiTruck } from "react-icons/fi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { LiaPercentageSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';
import './home.css';
import Homeproduct from './homeproduct';

const Home = ({product, setProduct, detail, view, close, setClose}) => {
    const [homeProduct] = useState(Homeproduct);

    const handleAddToCart = (productId) => {
        console.log(`Add to cart: ${productId}`);
    };

    const handleViewProduct = (productId) => {
        console.log(`View product: ${productId}`);
    };

    const handleAddToFavorites = (productId) => {
        console.log(`Added to favorites: ${productId}`);
    };

    return (
        <>
{
            close ?
                <div className='product_detail'>
                    <div className='container'>
                        <button onClick={() => setClose(false)} className='closebtn'><IoMdCloseCircleOutline /></button>
                        {detail.map((curElm) => {
                            return (
                                <div className='productbox' key={curElm.id}>
                                    <div className='img-box'>
                                        <img src={curElm.Img} alt={curElm.Title} style={{width:'180px'} } />
                                    </div>
                                    <div className='detail'>
                                        <h4>{curElm.Cat}</h4>
                                        <h2>{curElm.Title}</h2>
                                        <p>A Screen Everyone Will Love: Whether your family is streaming or video chatting with friends tablet A8...</p>
                                        <h3>{curElm.Price}</h3>
                                        <button onClick={() => view(curElm)}>View Details</button>
                                    </div>
                                </div>
                            )
                        }
                        )}
                        <div className='productbox'></div>
                    </div>
                </div>:null
                }
            <div className='top_banner'>
                <div className='container'>
                    <div className='detail'>
                        <h2>The Best Note Book Collection 2024</h2>
                        <Link to='/product' className='link'>
                            Shop Now <BsArrowRight />
                        </Link>
                    </div>
                    <div className='img_box'>
                        <img src='./img/tablet.png' alt='Tablet' />
                    </div>
                </div>
            </div>

            <div className='product_type'>
                <div className='container'>
                    {['mobile', 'headphone', 'cpu', 'smartwatch'].map((item, idx) => (
                        <div className='box' key={idx}>
                            <div className='img_box'>
                                <img src={`./img/${item}.png`} alt={item} />
                            </div>
                            <div className='detail'>
                                <p>{25 + idx * 10} products</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='about'>
                <div className='container'>
                    {[
                        { icon: <FiTruck />, title: "Free Shipping", desc: "Order from $100 or more" },
                        { icon: <CiDollar />, title: "Return and Refund", desc: "Money Back Guarantee" },
                        { icon: <LiaPercentageSolid />, title: "Member Discount", desc: "On Every Order" },
                        { icon: <FaHeadphones />, title: "Customer Support", desc: "Every Time Call Support" }
                    ].map((item, idx) => (
                        <div className='box' key={idx}>
                            <div className='icon'>{item.icon}</div>
                            <div className='detail'>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='product'>
                <h2>Top Product</h2>
                <div className='container'>
                    {homeProduct.map((curElm) => (
                        <div className='box' key={curElm.id}>
                            <div className='img_box'>
                                <img src={curElm.Img} alt={curElm.Title} />
                                <div className='icon'>
                                    <li><AiOutlineShoppingCart onClick={() => handleAddToCart(curElm.id)} /></li>
                                    <li onClick={() => view(curElm)}><BsEye/></li>
                                    <li><AiOutlineHeart onClick={() => handleAddToFavorites(curElm.id)} /></li>
                                </div>
                            </div>
                            <div className='detail'>
                                <p>{curElm.Cat}</p>
                                <h3>{curElm.Title}</h3>
                                <h4>{curElm.Price}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='banner'>
                <div className='container'>
                    <div className='detail'>
                        <h4>LATEST TECHNOLOGY ADDED</h4>
                        <h3>Apple Ipad 10.2 9th Gen - 2021</h3>
                        <p>$ 986</p>
                        <Link to='/product' className='link'>Shop Now <BsArrowRight/></Link>
                    </div>
                    <div className='img_box'>
                        <img src='./img/laptop.png' alt='slide' />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
