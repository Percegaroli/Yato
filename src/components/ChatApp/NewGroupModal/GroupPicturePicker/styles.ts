import { MdImage } from 'react-icons/md';
import styled from 'styled-components';

export const Title = styled.h3`
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #EEEEEE;
  margin-bottom: 22px;
`;

export const Placeholder = styled.div`
  width: 135px;
  height: 135px;
  border-radius: 100%;
  border: 1px dashed #C4C4C4;
  box-sizing: border-box;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  margin-top: 16px;
`;

export const FileInput = styled.input`
  display: none;
`;

export const ImageIcon = styled(MdImage)`
  color: #C4C4C4;
  width: 25px;
  height: 25px;
`;
