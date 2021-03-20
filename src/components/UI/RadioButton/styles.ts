import styled from 'styled-components';

interface CircleProps {
  selected: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.h3`
  margin-left: 16px;
  font-size: 15px;
  font-weight: normal;
  line-height: 17px;
  color: #EEEEEE;
`;

export const OuterCircle = styled.div<CircleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  border: 1px solid;
  border-color: ${(props) => (props.selected ? '#FFD369' : '#EEEEEE')};
  transition: all .2s;
`;

export const InnerCircle = styled.div<CircleProps>`
  width: 9px;
  height: 9px;
  border-radius: 100%;
  background-color: ${(props) => (props.selected ? '#FFD369' : 'transparent')};
  transition: all .2s;
`;
