import React from 'react';
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { IoMdCloseCircleOutline } from "react-icons/io";
import './product.css';
import Productdetail from './productdetail';

const Product = ({ product, setProduct, detail, view, close, setClose }) => {

    // Hàm để hiển thị tất cả sản phẩm
    const AllProduct = () => {
        setProduct(Productdetail);
    };

    const filterProduct = (category) => {
        const filtered = Productdetail.filter((item) => item.Cat === category);
        setProduct(filtered);
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
            <div className='products'>
                <h2># Product</h2>
                <p>Home .product</p>
                <div className='container'>
                    <div className='filter'>
                        <div className='categories'>
                            <ul>
                                <li onClick={() => AllProduct()}>Tất Cả Đồ Dùng</li>
                                <li onClick={() => filterProduct("Máy Tính Bảng")}>Máy Tính Bảng</li>
                                <li onClick={() => filterProduct("Sạc Dự Phòng")}>Sạc Dự Phòng</li>
                                <li onClick={() => filterProduct("Máy Chơi Game")}>Máy Chơi Game</li>
                                <li onClick={() => filterProduct("Điện Thoại")}>Điện Thoại</li>
                                <li onClick={() => filterProduct("Máy Ảnh")}>Máy Ảnh</li>
                                <li onClick={() => filterProduct("Tai Nghe")}>Tai Nghe</li>
                                <li onClick={() => filterProduct("Laptop")}>Laptop</li>
                                <li onClick={() => filterProduct("Chuột")}>Chuột</li>
                                <li onClick={() => filterProduct("Bàn Phím")}>Bàn Phím</li>
                                <li onClick={() => filterProduct("Loa")}>Loa</li>
                                <li onClick={() => filterProduct("Màn Hình")}>Màn Hình</li>
                                <li onClick={() => filterProduct("Dây Sạc")}>Dây Sạc</li>
                            </ul>
                        </div>
                    </div>
                    <div className='productbox'>
                        <div className='contant'>
                            {product.map((curElm) => (
                                <div className='box' key={curElm.id}>
                                    <div className='img_box'>
                                        <img src={curElm.Img} alt={curElm.Title} />
                                        <div className='icon'>
                                            <li><AiOutlineShoppingCart /></li>
                                            <li onClick={() => view(curElm)}><BsEye /></li>
                                            <li><AiOutlineHeart /></li>
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
                </div>
            </div>
        </>
    );
};

export default Product;
