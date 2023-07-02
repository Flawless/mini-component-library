import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
    height: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2,
    height: 36,
  },
};

const IconInput = ({
    label,
    icon,
    width = 250,
    size,
    ...delegated
}) => {
    const style = STYLES[size];

    return (
	<Wrapper style={{"--height": style.height / 16 + "rem"}} >
	<VisuallyHidden style={{"--widht": width + "px"}}>{label}</VisuallyHidden>
	<TextInput {...delegated}
	style={{
	  '--width': width + 'px',
	  '--height': style.height / 16 + 'rem',
	  '--border-thickness': style.borderThickness + 'px',
	  '--font-size': style.fontSize / 16 + 'rem',
	}}/>
	<IconWrapper style={{ '--size': style.iconSize + 'px' }}>
	<Icon id={icon} size={style.iconSize}/>
	</IconWrapper>
	</Wrapper>
    );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

const TextInput = styled.input`
  width: var(--width);
  height: var(--height);
  font-size: var(--font-size);
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  padding-left: var(--height);
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }`;

export default IconInput;
