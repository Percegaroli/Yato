import styled from 'styled-components';
import { MdSettings } from 'react-icons/md';

interface MdSettingsProps {
  selected?: boolean
}

export const Container = styled.div`
  display: flex;
  justify-content:center;
  position: relative;
`;

export const Settings = styled(MdSettings)<MdSettingsProps>`
  color: ${(props) => (props.selected ? '#FFD369' : '#888B8F')};
  font-size: 28px;
  position: absolute;
  right: 22px;
`;

export default {};
