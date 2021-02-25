import styled from 'styled-components';
import Image from 'next/image';

export const MessageLine = styled.h3`
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: normal;
  line-height: 20px;
  color: #ACACAC;
  &:last-child {
    margin: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  margin-bottom: 40px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const PhotoContainer = styled.div`

`;

export const Photo = styled(Image)`
  border-radius: 50%;
`;

export const MessageContainer = styled.div`
  margin-left: 23px;
`;

export const Name = styled.h4`
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  color: #EEEEEE;
`;

export const SendAt = styled.h6`
  font-weight: 300;
  font-size: 8px;
  line-height: 10px;
  color: #EEEEEE;
  margin-left: 16px;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;
