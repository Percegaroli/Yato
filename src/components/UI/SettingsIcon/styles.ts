import styled from 'styled-components';
import { MdSettings } from 'react-icons/md';

interface MdSettingsProps {
  selected?: boolean
}

export const Settings = styled(MdSettings)<MdSettingsProps>`
  color: ${(props) => (props.selected ? '#FFD369' : '#888B8F')};
  font-size: 28px;
`;

export default {};
