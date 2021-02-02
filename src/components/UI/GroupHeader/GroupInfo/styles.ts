import styled from 'styled-components';
import GroupImage from '../../GroupImage';

export const Container = styled.div`
  display: flex;
  align-content: center;
`;

export const TextContainer = styled.div`
  margin-left: 33px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const GroupName = styled.h1`
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #EEEEEE;
`;

export const MemberSince = styled.h5`
  font-size: 12px;
  line-height: 15px;
  color: #EEEEEE;
  font-weight: normal;
`;

export const GroupIcon = styled(GroupImage)`
  border-radius: 18px;
`;
