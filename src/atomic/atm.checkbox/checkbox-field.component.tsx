import * as React from 'react';

import { FormFieldContext } from '@atomic/obj.form';

import {
  CheckboxCheckedStyled,
  CheckboxFieldBulletStyled,
  CheckboxFieldBulletWrapperStyled,
  CheckboxFieldStyled,
  CheckboxFieldTextStyled,
  CheckboxStyledProps,
  CheckboxUncheckedStyled,
} from './checkbox-field.component.style';

export interface CheckboxFieldProps extends CheckboxStyledProps {
  id: number | string;
  initialChecked?: boolean;
  checked?: boolean;
  onClick?: (id?: number | string) => void;
  onValueChange?: (id: number | string, checked?: boolean) => void;
  children?: React.ReactNode;
}

export const CheckboxField: React.FC<CheckboxFieldProps> = (props) => {
  const [checked, setChecked] = React.useState(props.initialChecked ?? props.checked ?? false);
  const formFieldConsumer = React.useContext(FormFieldContext);

  const name = formFieldConsumer?.name ?? '';
  const fieldId = name + '_' + props.id;

  const isControlled = () => {
    return props.checked !== undefined;
  };

  React.useEffect(() => {
    if (isControlled() && props.initialChecked !== undefined) {
      throw new Error('Use either the initialChecked prop, or the checked prop, but not both');
    }

    if (formFieldConsumer) {
      if (isControlled() || props.initialChecked !== undefined) {
        throw new Error('Please, use value props in <Form.Field> instead of <CheckboxField> component.');
      }
    }
  }, []);

  React.useEffect(() => {
    if (formFieldConsumer) {
      const value = getCurrentValue();
      setChecked(value);
    }
  }, [formFieldConsumer]);

  const getCurrentValue = () => {
    if (formFieldConsumer?.value) {
      return formFieldConsumer.value?.indexOf?.(props.id) > -1;
    }

    return checked;
  };

  const handlePress = () => {
    props.onClick?.(props.id);

    const checkToggle = !getCurrentValue();

    props.onValueChange?.(props.id, checkToggle);

    if (isControlled()) {
      return;
    }

    formFieldConsumer?.onValueChange([props.id], checkToggle);

    setChecked(checkToggle);
  };

  return (
    <CheckboxFieldStyled disabled={props.disabled}>
      <CheckboxFieldBulletWrapperStyled onClick={handlePress}>
        <CheckboxFieldBulletStyled
          id={fieldId}
          name={fieldId}
          type='checkbox'
          checked={checked}
          onChange={handlePress}
          value={props.id}
        />
        <CheckboxCheckedStyled aria-hidden='true' disabled={props.disabled} />
        <CheckboxUncheckedStyled aria-hidden='true' disabled={props.disabled} />
      </CheckboxFieldBulletWrapperStyled>
      <CheckboxFieldTextStyled htmlFor={fieldId}>{props.children}</CheckboxFieldTextStyled>
    </CheckboxFieldStyled>
  );
};
