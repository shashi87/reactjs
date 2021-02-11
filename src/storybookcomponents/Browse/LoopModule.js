import classnames from "classnames"
const LoopModule = props => {
    var fromData = props.fromDataObj;
    return <div className={`text-left`}>
            <div className="text-lg  p-1 bg-gray-500">
                <h4 className="text-gray-200">{props.title}</h4>
            </div>
            <div className="text-gray-50 p-1 ">
                <h6>All {props.title}</h6>
            </div>
            {!props.loading?<ul className="h-96 overflow-x-scroll">
                {props.data.length === 0? <li className="mb-1 p-1 leading-6">No Record</li>:null}
                {props.data.map((_data, index) => {
                    const bool = fromData[props.keyParam] === _data[props.id];
                    return <li 
                        className = {
                            classnames({
                                "cursor-pointer": 1,
                                "leading-6": 1,
                                "mb-1": 1,
                                "p-1": 1,
                                //"bg-gray-300": !bool,
                                "bg-gray-400": bool,
                                "hover:bg-gray-400": 1,
                                "last:mb-0": 1
                            })
                        }
                        key={index} onClick={() => {
                        fromData[props.keyParam] = _data[props.id];
                        props.setFormData(fromData);
                    }}>
                        <span>{_data[props.name]}</span>
                    </li>
                })}
            </ul>:<div className="h-96 overflow-x-scroll">loading....</div>}
        </div>
};

export default LoopModule;