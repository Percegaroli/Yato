import React, { useState } from 'react';
import Button from '../../../../UI/Button';
import InviteMemberInput from '../InviteMemberInput';
import { Title, DescriptionContainer, Text } from './styles';

const InviteMemberSection: React.FC = () => {
  const [invitationEmail, setInvitationEmail] = useState('');

  return (
    <>
      <Title>
        Convidar um novo membro
      </Title>
      <Button
        text="Gerar Link"
      />
      <DescriptionContainer>
        <Text>
          Para convidar um novo membro, pressione o botão acima para gerar um novo link.
        </Text>
        <Text>
          Em seguida, copie o link gerado e envie para a pessoa
        </Text>
        <Text>
          Ou, digite o email da pessoa para convida-la.
        </Text>
        <InviteMemberInput
          value={invitationEmail}
          onChange={setInvitationEmail}
        />
      </DescriptionContainer>
    </>
  );
};

export default InviteMemberSection;
