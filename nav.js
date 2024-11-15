    import { useAuth0 } from "@auth0/auth0-react";
    import React, { useState } from 'react';
    import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';
    import { BsBagCheckFill } from "react-icons/bs";
    import { CiLogin, CiLogout } from "react-icons/ci";
    import { FaTruck } from 'react-icons/fa';
    import { Link } from 'react-router-dom';
    import './nav.css';
    const Nav = ({searchbtn}) => {
        const [search, setSearch] = useState()
        const { loginWithRedirect, logout,user, isAuthenticated  } = useAuth0();
    return (
        <>
        <div className='free'>
                <div className='icon'>
                < FaTruck />
                </div>
                <p>Miễn Phí Ship Khi Đặt Đơn Từ 100$ Trở Lên</p>
        </div>
        <div className='main_header'>
            <div className='container'>
                <div className='logo'>
                    <img src='./img/Amazon.png' alt='logo' />
                </div>
                <div className='search_box'>
                    <input type='text' value={search} placeholder='Nhập Tên Sản Phẩm' autoComplete='off' onChange={(e) => setSearch (e.target.value)}></input>
                    <button onClick={() => searchbtn (search)} className='search_btn'>Tìm Kiếm</button>
                </div>
                <div className='icon'>
                    {
                        isAuthenticated &&
                        (
                            <div className='account'>
                            <div className='user_icon'>
                            <AiOutlineUser />
                            </div>
                            <p>Xin Chào {user.name}</p>
                        </div>
                        )
                    }
                    <div className='second_icon'>
                            <Link to='/' className='link'><AiOutlineHeart /></Link>
                            <Link to='/cart'className='link'><BsBagCheckFill /></Link>
                    </div>
                </div>
            </div>
        </div>
        <div className='header'>
            <div className='container'>
                <div className='nav'>
                <ul>
                    <li>
                        <Link to='/' className='link'>Home</Link>
                    </li>
                    <li>
                        <Link to='/product' className='link'>Product</Link>
                    </li>
                    <li>
                        <Link to='/about' className='link'>About</Link>
                    </li>
                    <li>
                        <Link to='/contact' className='link'>Contact</Link>
                    </li>
                </ul>
                </div>
                <div className='auth'>
                    {
                        isAuthenticated ?
                        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><CiLogout /></button>
                        :
                        <button onClick={() =>loginWithRedirect()}><CiLogin /></button>
                    }
                </div>
            </div>
        </div>
        </>
        )
    }

    export default Nav