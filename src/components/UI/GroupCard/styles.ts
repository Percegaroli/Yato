import styled from 'styled-components';
import Image from 'next/image';

export const Card = styled.div`
  display: flex;
  align-items: center;
`;

export const GroupImage = styled(Image)`
  border-radius: 10px;
`;

export const GroupName = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #EEEEEE;
  margin-left: 23px;
`;

export default {};
