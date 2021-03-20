import React from 'react';
import RadioButton from '../../../UI/RadioButton';
import { Container, Title, RadioButtonsContainer } from './styles';

interface Props {
  isGroupPrivated: boolean
  setGroupPrivacy: (privacy: boolean) => void
}

const GroupPrivacy: React.FC<Props> = ({ isGroupPrivated, setGroupPrivacy }) => (
  <Container>
    <Title>
      Privacidade
    </Title>
    <RadioButtonsContainer>
      <RadioButton
        selected={isGroupPrivated}
        label="Privado"
        onSelect={() => setGroupPrivacy(true)}
      />
      <RadioButton
        selected={!isGroupPrivated}
        label="Público"
        onSelect={() => setGroupPrivacy(false)}
      />
    </RadioButtonsContainer>

  </Container>
);

export default GroupPrivacy;
