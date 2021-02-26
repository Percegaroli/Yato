import React from 'react';
import Button from '../../../UI/Button';
import Divisor from '../../../UI/Divisor';
import MembersList from './MembersList';
import {
  DescriptionContainer, Text, DrawerContailer, Close, ContentContainer, Title,
} from './styles';

interface Props {
  isShowing: boolean,
  close: () => void
}

const DetailsDrawer: React.FC<Props> = (props: Props) => {
  const { isShowing, close } = props;
  return (
    <DrawerContailer>
      <Close />
      <ContentContainer>
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
        </DescriptionContainer>
        <Divisor orientation="horizontal" />
        <MembersList />
      </ContentContainer>
    </DrawerContailer>
  );
};

export default DetailsDrawer;
