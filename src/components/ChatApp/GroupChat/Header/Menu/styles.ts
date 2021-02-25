import styled from 'styled-components';
import { MdSettings } from 'react-icons/md';

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Item = styled.h3`
  font-size: 16px;
  line-height: 20px;
  font-weight: normal;
  color: #EEEEEE;
  margin-right: 32px;
`;

export const Settings = styled(MdSettings)`
  font-size: 24px;
  color: #888B8F;
`;
