import * as React from 'react';

import { createPortal } from 'react-dom';

import {
  CloseIconStyled,
  ModalBoxStyled,
  ModalCloseStyled,
  ModalOpacityStyled,
  ModalStyled,
} from './modal.component.style';

export interface ModalProps {
  small?: boolean;
  opened?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = (props) =>
  createPortal(
    <ModalStyled opened={props.opened}>
      <ModalOpacityStyled opened={props.opened} onClick={props.onClose} />
      {props.opened && (
        <ModalBoxStyled small={props.small}>
          <ModalCloseStyled>
            <CloseIconStyled onClick={props.onClose} />
          </ModalCloseStyled>
          {props.children}
        </ModalBoxStyled>
      )}
    </ModalStyled>,
    document.getElementById('modal'),
  );
