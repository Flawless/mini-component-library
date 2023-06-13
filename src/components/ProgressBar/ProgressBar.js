/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--borderRadius": 4 + "px",
    "--fontSize": 16 / 16 + "rem",
    "--padding": "0"
  },
  medium: {
    "--borderRadius": 4 + "px",
    "--fontSize": 18 / 16 + "rem",
    "--padding": "0"
  },
  large: {
    "--borderRadius": 8 + "px",
    "--fontSize": 21 / 16 + "rem",
    "--padding": "4px"
  }
};

const ProgressBar = ({ value, size }) => {
let Component;
  if (size === "small") {
    Component = Small;
  } else if (size === "medium") {
    Component = Medium;
  } else if (size === "large") {
    Component = Large;
  } else {
    throw new Error(`Unrecognized ProgressBar size: ${size}`);
  }
    return <Component
	       role="progressbar"
	       value={value}
	       aria-valuenow={value}
	       aria-valuemin={0}
	       aria-valuemax={100}>
	       <VisuallyHidden>
		   {value + '%'}
	       </VisuallyHidden>
	   </Component>
    ;
}
;


const ProgressBase = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  position: relative;
  display: inline-block;
  background: ${COLORS.transparentGray15};
  overflow: hidden;
  width: 100%;

::before {
  top: 0px;
  left: 0px;
  height: 100%;
  content: "";
  position: absolute;
  margin: auto;
  background: ${COLORS.primary};
  width: ${props => props.value + "%"}
}
`

const Small = styled(ProgressBase)`
  height: 8px;
  border-radius: 4px;
`

const Medium = styled(ProgressBase)`
  height: 12px;
  border-radius: 4px;
`

const Large = styled(ProgressBase)`
  height: 24px;
  border-radius: 8px;

::before {
  top: 4px;
  left: 4px;
  border-radius: ${props => props.value == 100 && '4px 4px 4px 4px' || '4px 0 0 4px'};
  height: 16px;
  width: calc(${props => props.value + "%"} - ${props => 8 * props.value / 100 + 'px'});
}
`

const Wrapper = styled.progress`
  opacity: 0;
`

export default ProgressBar;
