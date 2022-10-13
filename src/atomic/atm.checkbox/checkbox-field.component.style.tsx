import styled from 'styled-components';

import { FaIcon } from '@atomic/atm.fa-icon';
import { InputValue } from '@atomic/atm.typography';
import { Color, Spacing } from '@atomic/obj.constants';
import { highlightStyle } from '@atomic/obj.mixin';

export const checkboxHeight = 24;
export const marginBetweenCheckboxItems = Spacing.XSmall;

export interface CheckboxStyledProps {
  disabled?: boolean;
}

export const CheckboxFieldStyled = styled.div<CheckboxStyledProps>`
  pointer-events: ${(props: CheckboxStyledProps) => (props.disabled ? 'none' : 'auto')};
  cursor: pointer;
  & ~ * {
    margin-top: ${marginBetweenCheckboxItems};
  }
  display: flex;
  align-items: flex-start;
`;

export const CheckboxFieldTextStyled = styled(InputValue)`
  padding-left: 28px;
  line-height: 28px;
  z-index: 2;
  ${highlightStyle};
`;

export const CheckboxFieldBulletWrapperStyled = styled.div`
  position: relative;
`;

export const CheckboxCheckedStyled = styled(FaIcon.CheckSquare)<CheckboxStyledProps>`
  position: absolute;
  font-size: ${checkboxHeight}px !important;
  color: ${(props: CheckboxStyledProps) => (props.disabled ? Color.GrayLight : Color.Primary)};
  z-index: 1;
  opacity: 0;
  top: 2px;
`;

export const CheckboxUncheckedStyled = styled(FaIcon.Square)<CheckboxStyledProps>`
  position: absolute;
  font-size: ${checkboxHeight}px !important;
  color: ${(props: CheckboxStyledProps) => (props.disabled ? Color.GrayLight : Color.Black)};
  z-index: 0;
  opacity: 1;
  top: 2px;
`;

export const CheckboxFieldBulletStyled = styled.input`
  line-height: 28px;
  width: 0;
  opacity: 0; /* keeping the input available on the accessibility tree  */
  &:checked + ${CheckboxCheckedStyled} {
    opacity: 1;
    + ${CheckboxUncheckedStyled} {
      opacity: 0;
    }
  }
`;
