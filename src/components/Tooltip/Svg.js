import classNames from "classnames";
const getSVG = (placement, _placement) => {
    let placementArrow = [];
    let currentPostion = _placement;
    const postion = ['bottom-right', 'top-right'].includes(placement);
    placementArrow['bottom'] = <svg 
        className={classNames({"absolute top-0.5":true,
         "right-1.5": !postion,
         "right-0": postion,
        })} 
        xmlns="http://www.w3.org/2000/svg" 
        x="0px" y="0px" 
        width="15.871px" height="15.871px" 
        viewBox="0 0 45.871 45.871">
            <g>
                <path d="M44.68,29.383L26.728,11.52c-2.098-2.087-5.488-2.087-7.585,0L1.19,29.383c-1.16,1.155-1.509,2.707-0.884,4.222
        c0.624,1.512,2.099,2.311,3.735,2.311h37.786c1.638,0,3.112-0.799,3.736-2.312C46.189,32.09,45.84,30.539,44.68,29.383z" fill="#555658"/>
            </g>
        </svg>
    placementArrow['top'] = <svg 
    className={classNames({"absolute bottom-0 ":true,
    "right-2": !postion,
    "right-0": postion,
   })} xmlns="http://www.w3.org/2000/svg" width="15.871px" height="15.871px" viewBox="0 0 24 24">
        <path d="M12 21l-12-18h24z" fill="#555658"/>
    </svg>
    placementArrow['right'] = <svg className="absolute -bottom-0.5 right-2" xmlns="http://www.w3.org/2000/svg" width="15.871px" height="15.871px" viewBox="0 0 24 24"><path d="M3 12l18-12v24z"/></svg>
    placementArrow['left'] = <svg className="absolute top-5 right-0" xmlns="http://www.w3.org/2000/svg" width="15.871px" height="15.871px" viewBox="0 0 24 24"><path  fill="#555658" d="M6 0l12 12-12 12z"/></svg>
    return placementArrow[currentPostion];
}
export default getSVG;