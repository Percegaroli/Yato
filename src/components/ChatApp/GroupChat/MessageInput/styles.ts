import styled from 'styled-components';
import { MdSend } from 'react-icons/md';
import { Input } from '../../../UI/InputField/styles';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  right: 0;
  padding: 34px 42px;
  display: flex;

  > ${Input} {
    border-bottom-right-radius: 0px;
    border-top-right-radius: 0px;
  }
`;

export const IconButton = styled.button`
  border: none;
  padding: 10px;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  background-color: #C4C4C4;
`;

export const SendIcon = styled(MdSend)`
  color: #ACACAC;
  font-size: 20px;
  
`;
