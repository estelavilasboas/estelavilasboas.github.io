import * as React from 'react';

import { FormFieldContext, FormFieldContextState } from '@atomic/obj.form';

import {
  RadioCheckedStyled,
  RadioFieldInputStyled,
  RadioFieldLabelStyled,
  RadioFieldStyled,
  RadioUncheckedStyled,
} from './radio-field.component.style';

interface RadioFieldProps {
  id: any;
  onClick?: (id: any) => void;
  disabled?: boolean;
  expanded?: boolean;
  mb?: boolean;
  children?: React.ReactNode;
}

const DefaultRadioBullet: React.FC<{ checked: boolean }> = (props) =>
  props.checked ? <RadioCheckedStyled aria-hidden='true' /> : <RadioUncheckedStyled aria-hidden='true' />;

export const RadioField: React.FC<RadioFieldProps> = (props) => {
  const formFieldConsumer = React.useContext<FormFieldContextState>(FormFieldContext);

  const handlePress = () => {
    props.onClick?.(props.id);

    formFieldConsumer.onValueChange(props.id, null);
  };

  if (!formFieldConsumer) {
    throw new Error('<RadioField /> must be wrapped with a <Form.Field> tag');
  }

  const radioFieldId = formFieldConsumer.name + '_' + props.id;

  return (
    <RadioFieldStyled mb={props.mb} expanded={props.expanded} onClick={handlePress}>
      <RadioFieldInputStyled type='radio' name={formFieldConsumer.name} id={radioFieldId} value={props.id} />
      <DefaultRadioBullet checked={formFieldConsumer.value === props.id} />
      <RadioFieldLabelStyled htmlFor={radioFieldId} expanded={props.expanded}>
        {props.children}
      </RadioFieldLabelStyled>
    </RadioFieldStyled>
  );
};
