import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 32px 42px;
`;
export const GroupInfoContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const Photo = styled(Image)`
  border-radius: 18px;
`;
export const DescriptionContainer = styled.div`
  margin-left: 33px;
`;
export const GroupName = styled.h1`
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #EEEEEE;
`;
export const MemberSince = styled.h5`
  font-size: 12px;
  line-height: 15px;
  color: #EEEEEE;
  font-weight: normal;
`;
