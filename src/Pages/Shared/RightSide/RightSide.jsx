import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa6";
import img1 from '../../../assets/qZone1.png'
import img2 from '../../../assets/qZone2.png'
import img3 from '../../../assets/qZone3.png'


const RightSide = () => {
    return (
        <div>

           {/* login with */}

             <div className="px-4 space-y-3 mb-6">
                <h2 className="text-3xl">Login with</h2>
                <button className="btn btn-outline w-full">
                       <FaGoogle></FaGoogle>
                       Google
                </button>
                <button className="btn btn-outline w-full">
                       <FaGithub></FaGithub>
                       Github 
                </button>
             </div>

             {/* find use */}

             <div className="px-4  mb-6">
                <h2 className="text-3xl gap-3">find us</h2>
                 <a href="" className="p-4 flex text-lg items-center border rounded-lg">
                   <FaFacebook className='mr-3'></FaFacebook>
                   <span>Facebok</span>
                 </a>
                 <a href="" className="p-4 flex text-lg items-center border rounded-lg">
                   <FaTwitter className='mr-3'></FaTwitter>
                   <span>Twitter</span>
                 </a>
                 <a href="" className="p-4 flex text-lg items-center border rounded-lg">
                   <FaInstagram className='mr-3'></FaInstagram>
                   <span>Facebok</span>
                 </a>

             </div>

             {/* Q jone */}
             <div className="px-4  mb-6">
                <h2 className="text-3xl gap-3">Q jone</h2>
                  <img src={img1} alt="" />
                  <img src={img2} alt="" />
                  <img src={img3} alt="" />

             </div>
        </div>
    );
};

export default RightSide;