import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
      <Wrapper>
      <SelectWrapper value={value} onChange={onChange}>{children}</SelectWrapper>
      <RealSelect role="select">{displayedValue}</RealSelect>
      <IconWrapper id="chevron-down"/>
      </Wrapper>
  );
};

const Wrapper = styled.div`
    position: relative;
    width: min-content;
    color: ${COLORS.gray700};

    &:hover {
    color: ${COLORS.black};
    }
`

const IconWrapper = styled(Icon)`
  pointer-events: none;
  border-radius: 0 8px 8px 0;
  border-left: 0;
  position: absolute;
  right: 0;
  top: 0;
  padding: 9px 16px;
  & > svg {  color: inherit};
`

const SelectWrapper = styled.select`
  position: absolute;
  left: 0;
  opacity: 0;
  /* for Firefox */
  -moz-appearance: none;
  /* for Chrome */
  -webkit-appearance: none;

/* For IE10 */
::-ms-expand {
  display: none;
}
  padding: 12px 52px 12px 16px;
  // padding: 12px 16px;
  display: inline-block;
  border-radius: 8px;
  background: ${COLORS.transparentGray15};
  color: inherit;
`

const RealSelect = styled.div`
  pointer-events: none;
  white-space: nowrap;
  padding: 12px 52px 12px 16px;
  display: inline-block;
  border-radius: 8px;
  background: ${COLORS.transparentGray15};
  color: inherit;
  ${SelectWrapper}:focus + &
  {
  outline: solid 2px ${COLORS.primary};
  }
`



export default Select;
