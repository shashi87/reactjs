import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyBrowseButtonModal  from "../BrowseButtonModal/index";
import MyButton  from "../Button";
const Header = () => {
    const [isOn, setIsOn] = useState(false);
    const [formData, setFormData] = useState({});
    const loading = false;
    // Modal States
    const [visible, setVisible] = useState(false);
    // Modal Functions
    const showModal = () => {
        setVisible(true)
    }
    const handleCancel = () => {
        setFormData({})
        setVisible(false)
    }
    const handleOk = () => {
        setFormData({})
        setVisible(false)
    }
    return (<>
        <div className="shadow-md relative header bg-white">
            <div className="container mx-auto px-6 sm:px-6">
                <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
                    <div className="flex justify-start md:w-0 md:flex-1">
                        <span className="sr-only">Workflow</span>
                        <Link to="/" className="hidden md:block focus:outline-none focus:ring-2 focus:ring-inset">
                            <svg width="122" height="26" viewBox="0 0 122 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.6415 0H25.9958V26H13.6415V0ZM38.1226 19.4929C37.3958 18.9019 36.8479 18.1116 36.4805 17.1232L33.3986 18.5764C33.9602 20.2051 34.8902 21.46 36.1895 22.342C37.4875 23.224 38.9905 23.6649 40.6956 23.6649C41.6262 23.6649 42.5076 23.524 43.3415 23.2432C44.1753 22.9625 44.9016 22.5555 45.5226 22.0222C46.1419 21.489 46.6367 20.8397 47.0052 20.0742C47.3732 19.3084 47.5572 18.4417 47.5572 17.4719C47.5572 16.1156 47.1648 14.9766 46.3797 14.0561C45.5951 13.1356 44.4075 12.3653 42.8184 11.7448L40.3181 10.7847C39.4847 10.4558 38.8541 10.0923 38.4278 9.6944C38.0021 9.29754 37.7887 8.78874 37.7887 8.16826C37.7887 7.47089 38.0502 6.90869 38.5733 6.48181C39.0969 6.05615 39.7655 5.84217 40.5796 5.84217C41.4518 5.84217 42.1787 6.10887 42.7602 6.64212C43.3415 7.17538 43.787 7.82969 44.0977 8.60465L47.0918 7.09265C46.5296 5.67806 45.6676 4.57757 44.5048 3.79297C43.3415 3.00782 42.0237 2.60581 40.5501 2.58598C39.6584 2.58598 38.8303 2.72184 38.0649 2.99356C37.2985 3.26474 36.6305 3.65249 36.0588 4.1564C35.4869 4.66018 35.0409 5.27101 34.7216 5.98768C34.4013 6.70489 34.2416 7.49969 34.2416 8.37206C34.2416 9.76749 34.6582 10.9205 35.4921 11.8314C36.3253 12.7429 37.4977 13.4697 39.0097 14.0119L41.4225 14.8843C43.1281 15.5048 43.9811 16.4451 43.9811 17.7047C43.9811 18.5764 43.6619 19.241 43.0222 19.6961C42.3825 20.1518 41.6263 20.3794 40.7544 20.3794C39.7264 20.3794 38.85 20.0839 38.1226 19.4929ZM53.4779 9.0729V4.85725H50.1345V9.0729H48.0117V11.9221H50.1345V18.9291C50.1345 20.4218 50.5365 21.5847 51.341 22.4179C52.1453 23.2512 53.264 23.6678 54.6984 23.6678C55.2803 23.6678 55.7842 23.6198 56.2104 23.5229C56.6367 23.4256 56.9853 23.3005 57.2571 23.1448V20.1501C57.0443 20.3053 56.7964 20.4168 56.5161 20.4842C56.2347 20.5527 55.9585 20.5861 55.6873 20.5861C54.9311 20.5861 54.3741 20.4072 54.0157 20.0482C53.6562 19.69 53.4779 19.1136 53.4779 18.3183V11.9221H57.2571V9.0729H53.4779ZM65.5737 11.8111C64.9725 11.8111 64.4155 11.9272 63.9021 12.1598C63.3887 12.3924 62.943 12.7027 62.5649 13.0905C62.1868 13.4782 61.8856 13.9436 61.6638 14.4859C61.4401 15.0288 61.3291 15.6005 61.3291 16.2012C61.3291 16.8217 61.4401 17.3984 61.6638 17.9311C61.8856 18.4644 62.1868 18.9247 62.5649 19.3119C62.943 19.7002 63.3887 20.0098 63.9021 20.2425C64.4155 20.4751 64.9725 20.5911 65.5737 20.5911C66.1749 20.5911 66.7319 20.4751 67.2454 20.2425C67.7588 20.0098 68.205 19.7002 68.5831 19.3119C68.9612 18.9247 69.2613 18.4644 69.4842 17.9311C69.7073 17.3984 69.8189 16.8217 69.8189 16.2012C69.8189 15.6005 69.7073 15.0288 69.4842 14.4859C69.2613 13.9436 68.9612 13.4782 68.5831 13.0905C68.205 12.7027 67.7588 12.3924 67.2454 12.1598C66.7319 11.9272 66.1749 11.8111 65.5737 11.8111ZM65.5737 8.72932C66.6595 8.72932 67.6671 8.92293 68.5977 9.31068C69.5279 9.69911 70.3323 10.2267 71.0105 10.8952C71.6892 11.5637 72.2168 12.354 72.5949 13.2648C72.973 14.1763 73.1622 15.1545 73.1622 16.2012C73.1622 17.2479 72.973 18.2266 72.5949 19.1374C72.2168 20.0489 71.6892 20.8386 71.0105 21.5071C70.3323 22.1762 69.5279 22.7045 68.5977 23.0917C67.6671 23.4794 66.6595 23.6736 65.5737 23.6736C64.4879 23.6736 63.4809 23.4794 62.5503 23.0915C61.6202 22.7043 60.8157 22.1762 60.1369 21.5071C59.4582 20.8386 58.9306 20.0489 58.5531 19.1374C58.1748 18.2266 57.9858 17.2479 57.9858 16.2012C57.9858 15.1545 58.175 14.1763 58.5531 13.2648C58.9306 12.354 59.4582 11.5638 60.1369 10.8952C60.8157 10.2267 61.6202 9.69911 62.5503 9.31068C63.4809 8.92293 64.4879 8.72932 65.5737 8.72932ZM82.58 12.1852C83.0062 12.1852 83.2966 12.2242 83.4518 12.3018V8.87074C83.3934 8.813 83.1806 8.78407 82.812 8.78407C81.8826 8.78407 81.0288 9.03092 80.2539 9.52505C79.4784 10.0193 78.9162 10.684 78.5675 11.5167V9.07454H75.2531V23.3207H78.5969V17.0411C78.5969 15.5682 78.9501 14.3907 79.6578 13.5081C80.3654 12.6268 81.3397 12.1852 82.58 12.1852ZM85.0866 9.06942H88.4594V23.3162H85.0866V9.06942ZM88.8375 4.91205C88.8375 5.47411 88.6387 5.95873 88.242 6.36523C87.8434 6.77281 87.3447 6.97661 86.7441 6.97661C86.182 6.97661 85.6975 6.77281 85.2904 6.36523C84.8834 5.95873 84.6801 5.47411 84.6801 4.91205C84.6801 4.33002 84.8834 3.83643 85.2904 3.42885C85.6973 3.02181 86.182 2.81856 86.7441 2.81856C87.3447 2.81856 87.8434 3.02751 88.242 3.44352C88.6387 3.86075 88.8375 4.34986 88.8375 4.91205ZM101.133 13.468C101.346 13.8756 101.482 14.3116 101.54 14.7769H93.9229C93.9806 14.3699 94.1164 13.9673 94.3299 13.5699C94.5433 13.1732 94.819 12.8245 95.1587 12.5238C95.4972 12.2233 95.8855 11.9764 96.3215 11.7817C96.7574 11.5887 97.2271 11.4912 97.7316 11.4912C98.2354 11.4912 98.7104 11.574 99.1564 11.7387C99.6019 11.9035 99.9898 12.131 100.319 12.4214C100.649 12.7124 100.92 13.0611 101.133 13.468ZM101.86 22.6705C102.945 22.0019 103.789 21.1052 104.389 19.981L101.627 18.6728C101.221 19.2931 100.745 19.8065 100.203 20.2136C99.6603 20.6206 98.9238 20.8244 97.9931 20.8244C97.4701 20.8244 96.9656 20.7327 96.4811 20.5477C95.9965 20.3642 95.5696 20.1117 95.2023 19.7919C94.8331 19.472 94.5337 19.0939 94.3011 18.658C94.0684 18.2221 93.9325 17.7421 93.894 17.219H104.854C104.874 16.812 104.884 16.4729 104.884 16.2017C104.884 15.1357 104.709 14.1474 104.36 13.236C104.011 12.3246 103.521 11.5349 102.893 10.8663C102.262 10.1977 101.516 9.6741 100.654 9.29654C99.791 8.91844 98.8366 8.72932 97.7894 8.72932C96.7624 8.72932 95.808 8.91844 94.9261 9.29654C94.0435 9.6741 93.2782 10.1977 92.6295 10.8663C91.979 11.5349 91.4706 12.3246 91.1026 13.236C90.7342 14.1474 90.5501 15.1357 90.5501 16.2017C90.5501 17.3061 90.7342 18.3144 91.1026 19.2246C91.4706 20.1367 91.979 20.9213 92.6295 21.5802C93.2782 22.2391 94.0582 22.7531 94.9697 23.121C95.8805 23.4891 96.8785 23.6736 97.9642 23.6736C99.4762 23.6736 100.774 23.3391 101.86 22.6705ZM109.424 16.1981C109.424 16.8185 109.536 17.3948 109.759 17.928C109.981 18.4613 110.282 18.9261 110.66 19.3235C111.038 19.7209 111.488 20.0355 112.012 20.2683C112.535 20.5009 113.097 20.6176 113.698 20.6176C114.299 20.6176 114.861 20.5009 115.384 20.2683C115.907 20.0355 116.359 19.7209 116.736 19.3235C117.114 18.9261 117.414 18.4613 117.638 17.928C117.86 17.3948 117.972 16.8185 117.972 16.1981C117.972 15.5776 117.86 15.0013 117.638 14.4681C117.414 13.9353 117.114 13.47 116.736 13.0726C116.359 12.6752 115.907 12.3606 115.384 12.1278C114.861 11.8947 114.299 11.7785 113.698 11.7785C113.097 11.7785 112.535 11.8947 112.012 12.1278C111.488 12.3606 111.038 12.6752 110.66 13.0726C110.282 13.47 109.981 13.9353 109.759 14.4681C109.536 15.0013 109.424 15.5776 109.424 16.1981ZM117.826 23.3212V21.2855C117.303 22.0232 116.615 22.604 115.762 23.0302C114.909 23.4565 113.988 23.6698 113 23.6698C112.012 23.6698 111.096 23.4809 110.253 23.1026C109.41 22.7251 108.678 22.2014 108.058 21.5329C107.437 20.8643 106.948 20.0747 106.59 19.1633C106.231 18.2523 106.052 17.264 106.052 16.1981C106.052 15.1513 106.231 14.1725 106.59 13.2617C106.948 12.3509 107.437 11.5606 108.058 10.8915C108.678 10.2229 109.41 9.69536 110.253 9.30761C111.096 8.91986 112.012 8.72572 113 8.72572C113.988 8.72572 114.909 8.92489 115.762 9.32229C116.615 9.71968 117.303 10.2864 117.826 11.0229V2.96912H121.17V23.3212H117.826ZM5.73273 2.72275V23.2888H12.0265V2.72275H5.73273ZM0 5.5414H4.11999V20.4556H0V5.5414Z" fill="#F83D3D" />
                            </svg> </Link>
                        <Link to="/" className="md:hidden">
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M25.9958 0H13.6415V26H25.9958V0ZM5.73273 2.72275V23.2888H12.0265V2.72275H5.73273ZM0 5.5414H4.11999V20.4556H0V5.5414Z" fill="#F83D3D" />
                            </svg>
                        </Link>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <button type="button" onClick={() => setIsOn(!isOn)}
                            className="bg-white rounded-md p-2 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset">
                            <span className="sr-only">Open menu</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 14" stroke="currentColor" aria-hidden="true">
                                <path d="M1.25 13.003H20.75" stroke="#212122" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M1.25 7.00299H20.75" stroke="#212122" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M1.25 1.00299H20.75" stroke="#212122" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <nav className="hidden md:flex space-x-4">
                        <Link to="/" className="text-base font-medium text-gray-400 hover:text-gray-900 px-4 py-1 focus:outline-none focus:ring-2 focus:ring-inset focus:text-black hover:bg-gray-50 rounded-lg active:bg-gray-100 active:ring-0 active:text-gray-900">
                            Home
                        </Link>
                        <Link to="/search" className="text-base font-medium text-gray-400 hover:text-gray-900 px-4 py-1 hover:bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-inset focus:text-black active:bg-gray-100 active:text-gray-900">
                            Search
                        </Link>
                        <Link to="/family" className="text-base font-medium text-gray-400 hover:text-gray-900 px-4 py-1 hover:bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-inset focus:text-black active:bg-gray-100 active:text-gray-900">
                            Family
                        </Link>
                        <MyButton 
                            title="Browse"
                            className={"text-base font-medium text-gray-400 hover:text-gray-900 px-4 py-1 hover:bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-inset focus:text-black active:bg-gray-100 active:text-gray-900"} 
                            handleClick={showModal}/>
                    </nav>
                    <div className="hidden md:flex items-center justify-end md:flex-1 md:w-0">
                        <Link to="!#" className="whitespace-nowrap inline-flex items-center justify-center font-medium px-4 py-1 rounded-lg text-base text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:text-black">
                            Log in
                        </Link>
                        <Link to="!#" className="ml-4 whitespace-nowrap inline-flex items-center justify-center font-medium px-4 py-1 rounded-lg text-base text-white bg-gray-900 hover:bg-black focus:outline-none focus:ring-2 focus:ring-inset focus:text-white">
                            Get started
                        </Link>
                    </div>
                </div>
            </div>

            <div className={`fixed top-0 inset-x-0 transition transform origin-top-right ${isOn ? '' : 'hidden'} h-full mobileMenu"`}>
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white h-full">
                    <div className="pt-2.5 pb-6 px-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <Link to="/" className="md:hidden">
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M25.9958 0H13.6415V26H25.9958V0ZM5.73273 2.72275V23.2888H12.0265V2.72275H5.73273ZM0 5.5414H4.11999V20.4556H0V5.5414Z" fill="#F83D3D" />
                                    </svg>
                                </Link>
                            </div>
                            <div className="-mr-2">
                                <button type="button" onClick={() => setIsOn(false)} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-black focus:outline-none focus:ring-2 focus:ring-inset">
                                    <span className="sr-only">Close menu</span>
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" stroke="currentColor" aria-hidden="true">
                                        <path d="M1.625 20.3742L20.375 1.62418" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M20.375 20.3742L1.625 1.62418" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className="pt-6 px-6 space-y-6">
                        <div className="grid grid-cols-1 gap-y-6 gap-x-8 text-left">
                            <Link to="/" className="text-2xl font-medium text-gray-900 hover:text-gray-700">
                                Home
                            </Link>
                            <Link to="/search" className="text-2xl font-medium text-gray-900 hover:text-gray-700">
                                Search
                            </Link>
                            <Link to="/family" className="text-2xl font-medium text-gray-900 hover:text-gray-700">
                                Family
                            </Link>
                            <MyButton 
                                title="Browse" 
                                className="text-2xl font-medium text-gray-900 hover:text-gray-700" 
                                handleClick={showModal}/>
                        </div>
                        <div>
                            <Link to="!#" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-900 hover:bg-black">
                                Log in
                            </Link>
                            <p className="mt-6 text-center text-base font-medium text-gray-500">
                                <Link to="!#" className="text-base text-black">
                                    Get started
                                </Link>         
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <MyBrowseButtonModal handleCancel = {handleCancel} visible = {visible} handleOk = {handleOk} loading = {loading} setFormData = {setFormData} formData = {formData}/>
        </div>
    </>)
};

export default Header;