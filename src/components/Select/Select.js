import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
      <Wrapper>
      <NativeSelect value={value} onChange={onChange}>{children}</NativeSelect>
      <RealSelect role="select">{displayedValue}</RealSelect>
      <IconWrapper style={{"--size": 24 + "px"}}><Icon id="chevron-down" size={24} strokeWidth={1}/></IconWrapper>
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

const IconWrapper = styled.div`
  pointer-events: none;
  position: absolute;
  right: 10px;
  top: 0;
  bottom: 0;
  margin: auto;
  height: var(--size);
  width: var(--size);
  & svg {  color: inherit};
`

const NativeSelect = styled.select`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
`

const RealSelect = styled.div`
    pointer-events: none;
    white-space: nowrap;
    font-size: ${16 / 16}rem;
    padding: 12px 52px 12px 16px;
    display: inline-block;
    border-radius: 8px;
    background: ${COLORS.transparentGray15};
    color: inherit;
    ${NativeSelect}:focus + &
    {
    outline: solid 2px ${COLORS.primary};
    }
`



export default Select;
