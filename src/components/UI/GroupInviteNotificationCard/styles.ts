import styled from 'styled-components';

interface ActionButtonProps {
  variant: 'confirm' | 'cancel'
}

export const Card = styled.div`
  background: #222831;
  border-radius: 16px;
  padding: 10px 20px;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.25);
`;

export const TextContainer = styled.h2`
  font-size: 14px;
  line-height: 16px;
  color: #B5B5B5;
  margin-bottom: 11px;
`;

export const Emphasis = styled.div`
  font-style: bold;
  color: #EEEEEE;
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Data = styled.div`
  font-size: 10px;
`;

export const ActionButton = styled.button<ActionButtonProps>`
  width: 22px;
  height: 18px;
  border-radius: 4px;
  border: none;
  box-shadow: 0px 2px 2px #181D24;
  background-color: ${(props) => (props.variant === 'cancel' ? '#99565A' : '#6E775B')};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  & ${ActionButton} {
    &:last-child{
      margin-left: 12px;
    }
  }
`;
