import React from 'react';
import {
  Container, Label, OuterCircle, InnerCircle,
} from './styles';

interface Props {
  selected: boolean
  onSelect: () => void
  label: string
}

const RadioButton: React.FC<Props> = ({ selected, onSelect, label }) => (
  <Container
    onClick={onSelect}
  >
    <OuterCircle selected={selected}>
      <InnerCircle selected={selected} />
    </OuterCircle>
    <Label>
      {label}
    </Label>
  </Container>
);

export default RadioButton;
