import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/assets/qZone1.png'
import qZone2 from '../../../assets/assets/qZone2.png'
import qZone3 from '../../../assets/assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-4 mb-6'>
                <h2>Login with</h2>
                <button className='btn btn-outline w-full'>
                    <FaGoogle></FaGoogle>
                    Login With Google
                </button>
                <button className='btn btn-outline w-full'>
                    <FaGithub></FaGithub>
                    Login With Github
                </button>


            </div>
            <div className='p-4 mb-6'>
                <h2 className='mb-4'>Find Us On</h2>
                <a className='p-4 flex items-center text-lg border rounded-t-lg' href="">
                    <FaFacebook className='mr-3'></FaFacebook>
                    <span>Facebook</span>
                </a>
                <a className='p-4 flex items-center text-lg border-x ' href="">
                    <FaTwitter className='mr-3'></FaTwitter>
                    <span>Twitter</span>
                </a>
                <a className='p-4 flex items-center text-lg border rounded-b-lg' href="">
                    <FaInstagram className='mr-3'></FaInstagram>
                    <span>Instagram</span>
                </a>


            </div>


            <div className='p-4 space-y-4 mb-6'>
                <h2>Qzone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
               


            </div>
        </div>
    );
};

export default RightSideNav;