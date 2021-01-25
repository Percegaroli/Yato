import styled from 'styled-components';
import Image from 'next/image';

interface Props {
  selected?: boolean
}

export const IconImage = styled(Image)<Props>`
  color: ${(props) => (props.selected ? '#FFD369' : '#888B8F')}
`;

export default {};
