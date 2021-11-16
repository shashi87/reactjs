import React from 'react';
import ReactDom from "react-dom";
import Popper from "popper.js";
import classNames from "classnames";
import getSVG from "./Svg";
const Tooltip = ({
  classes,
  placement,
  title,
  arrow,
  children,
  width_surfix = '72',
  color = 'gray-600',
  textColor = 'text-pink-900'
}) => {
  const [open, setOpen] = React.useState(false);
  const _orgPlacement = React.useState(()=>{
    let placementTemp = placement;
    if(placement === "bottom-right" ||
      placement === "bottom-left"
    ) {
      placementTemp = "bottom";
    } else if(placement === "top-right" ||
      placement === "top-left"
    ) {
      placementTemp = "top";
    }
      return placementTemp;
    });
  const [_placement, setPlacement] = React.useState(_orgPlacement[0]);
    
  const anchoreRef = React.createRef();
  const rootRef = React.createRef();
  const handleEnter = React.useCallback((event)=>{
    setOpen(true);
  }, [])
  const handleLeave = React.useCallback((event)=>{
    setOpen(false);
  },[])
  const onCreate = (data)=>{
    setPlacement(data.placement);
  }
  const onUpdate = (data)=>{
    setPlacement(data.placement);
  }
  const popOverFunc = React.useCallback(()=>{
    if(anchoreRef.current && rootRef.current) {
      new Popper(anchoreRef.current, rootRef.current,  {
        "placement":_orgPlacement[0],
        onCreate: onCreate,
        onUpdate: onUpdate
      });
    }
  }, [anchoreRef, rootRef, _orgPlacement])
  React.useEffect(()=>{
    if( open ) {
      popOverFunc(anchoreRef, rootRef);
    } 
  },[open, anchoreRef, rootRef])
  var childrenProps = children.props;
  const anchoreElement = React.forwardRef(
    (node, ref) => {
      return React.cloneElement(children, {
        ...childrenProps,
        onMouseOver: handleEnter,
        onMouseLeave: handleLeave,
        ref: ref
      });
    }
  );
  const placementArrow = getSVG(placement, _placement);
  const rootElement = React.forwardRef(
    (node, ref) => {
      return node.open?ReactDom.createPortal(<div ref = {ref} className="z-10">  
      <div className={classNames({
          [`bg-${color} ${textColor} rounded p-2`]: true,
          "mt-3": _placement === 'bottom',
          "mb-3": _placement === 'top',
          "ml-3": _placement === 'right',
          "mr-3": _placement === 'left',
          [`-mr-${width_surfix}`]: [
            "bottom-right",
            "bottom-left",
            "top-right",
            "top-left"].includes(placement)
        })}>  
        {placementArrow}  
        <div className={classNames({[`w-${width_surfix}`]: true})}>
          {title}
        </div>
      </div>
    </div>, document.body): null;
    });
  return React.createElement(React.Fragment, null, 
    React.createElement(anchoreElement, {
      ref: anchoreRef
    }),
    React.createElement(rootElement, {
      open: open,
      ref: rootRef
    })
  );
}
export default Tooltip;