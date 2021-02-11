import {React} from 'react'
//import './main.scss'
const Footer =() =>
{
return(
<div className="footer bg-white py-4">
    <div className="container mx-auto">
        <div className="footer-links space-x-6 items-center">
            <a href="" className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-inset">About Us</a>
            <a href="" className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-inset">Contact Us</a>
            <a href="" className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-inset">Terms of Use</a>
            <a href="" className="text-sm  hover:underline focus:outline-none focus:ring-2 focus:ring-inset">Privacy</a>
            <a href="" className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-inset">Sitemap</a>
   
        </div>
        <div className="copy text-xs mt-3 mb-2">© Copyright 2020 Storied.com. All rights reserved.</div>
    </div>
</div>

);
};
export default Footer;