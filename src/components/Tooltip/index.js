import React from 'react';
import  Tooltip  from './Tooltip';
//import  Tooltip  from '@material-ui/core/Tooltip';
//import Tooltip from '../../../node_modules/@material-ui/core/Tooltip/Tooltip';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({ tooltip: {
    width: props=>props.width,
    height: props=>props.height,
    background: props=>props.background,
    border: props=>props.border,
    borderRadius: 8,
    boxShadow: '0 1px 1px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)'
  },
  arrow:{
    color: props=>props.color,
    fontSize: "2em"
  }
});

const MyTooltip = ({ 
  children,
  tooltip, 
  place = "top", 
  background = "#FFF", 
  width = 330, 
  height = 104,
  border= '1px solid #dadde9'  }) => {
  const classes = useStyles({
    background: background,
    width: width,
    height: height,
    color: background,
    border: border});
  return (
    <Tooltip
      classes={{
        tooltip: classes.tooltip,
        arrow: classes.arrow
      }}
      placement={place}
      title={tooltip}
      arrow={true}
    >
      {children}
    </Tooltip>
  );
}

export default MyTooltip
