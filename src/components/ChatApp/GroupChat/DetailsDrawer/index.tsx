import React from 'react';
import Divisor from '../../../UI/Divisor';
import InviteMemberSection from './InviteMemberSection';
import MembersList from './MembersList';
import { DrawerContailer, Close, ContentContainer } from './styles';

interface Props {
  isShowing: boolean,
  close: () => void
}

const DetailsDrawer: React.FC<Props> = (props: Props) => {
  const { isShowing, close } = props;
  return isShowing || true ? (
    <DrawerContailer>
      <Close onClick={close} />
      <ContentContainer>
        <InviteMemberSection />
        <Divisor orientation="horizontal" />
        <MembersList />
      </ContentContainer>
    </DrawerContailer>
  ) : <></>;
};

export default DetailsDrawer;
