import React from 'react';
import { Card, GroupName } from './styles';
import { GroupProps } from '../../interfaces/GroupProps';
import QuantityBullet from '../QuantityBullet';
import GroupImage from '../GroupImage';

const GroupCard: React.FC<GroupProps> = (props: GroupProps) => {
  const {
    image, name, newMessages,
  } = props;
  const {
    alt, src,
  } = image;

  const renderQuantityBullet = () => (newMessages > 0
    ? <QuantityBullet quantity={newMessages} />
    : <></>
  );

  return (
    <Card>
      <GroupImage
        src={src}
        alt={alt}
        width={50}
        height={50}
      />
      <GroupName>
        {name}
      </GroupName>
      {renderQuantityBullet()}
    </Card>
  );
};

export default GroupCard;
