import React from 'react';
import {
  Container, TextContainer, GroupName, MemberSince, GroupIcon,
} from './styles';

const GroupInfo: React.FC = () => (
  <Container>
    <GroupIcon
      src="/images/image-analysis.png"
      alt="aa"
      width={59}
      height={59}
    />
    <TextContainer>
      <GroupName>
        Academia Felix
      </GroupName>
      <MemberSince>
        Membro desde 20/01/2020
      </MemberSince>
    </TextContainer>
  </Container>
);

export default GroupInfo;
