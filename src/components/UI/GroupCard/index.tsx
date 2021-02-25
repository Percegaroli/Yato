import React from 'react';
import { Card, GroupImage, GroupName } from './styles';
import { GroupProps } from '../../interfaces/GroupProps';
import QuantityBullet from '../QuantityBullet';

const GroupCard: React.FC<GroupProps> = (props: GroupProps) => {
  const {
    image, name, newMessages, onClick,
  } = props;
  const {
    alt, height, src, width,
  } = image;

  const renderQuantityBullet = () => (newMessages > 0
    ? <QuantityBullet quantity={newMessages} />
    : <></>
  );

  return (
    <Card
      onClick={onClick}
    >
      <GroupImage
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
      <GroupName>
        {name}
      </GroupName>
      {renderQuantityBullet()}
    </Card>
  );
};

export default GroupCard;
