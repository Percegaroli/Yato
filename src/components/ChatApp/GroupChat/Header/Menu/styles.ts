import styled from 'styled-components';
import { MdSettings } from 'react-icons/md';

interface ItemProps {
  active: boolean
}

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Item = styled.h3<ItemProps>`
  font-size: 16px;
  line-height: 20px;
  font-weight: normal;
  color: ${(props) => (props.active ? '#FFD369' : '#EEEEEE')};
  margin-right: 32px;
  text-transform: ${(props) => (props.active ? 'uppercase' : 'none')}
`;

export const Settings = styled(MdSettings)`
  font-size: 24px;
  color: #888B8F;
`;
