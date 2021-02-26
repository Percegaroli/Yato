import styled from 'styled-components';
import { MdPerson, MdGroup, MdPowerSettingsNew } from 'react-icons/md';
import { IconInterface } from '../../../../interfaces/IconInterface';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
`;

export const PersonIcon = styled(MdPerson)<IconInterface>`
  color: ${(props) => (props.selected ? '#FFD369' : '#888B8F')};
  font-size: 28px;
`;

export const GroupIcon = styled(MdGroup)<IconInterface>`
  color: ${(props) => (props.selected ? '#FFD369' : '#888B8F')};
  font-size: 28px;
`;

export const LogoutIcon = styled(MdPowerSettingsNew)`
  color: #888B8F;
  font-size: 28px;
`;

export default {};
