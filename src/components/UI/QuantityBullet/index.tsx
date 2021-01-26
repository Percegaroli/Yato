import React from 'react';
import { Bullet, Quantity } from './styles';

interface Props {
  quantity: number
}

const QuantityBullet: React.FC<Props> = (props: Props) => {
  const { quantity } = props;
  return (
    <Bullet>
      <Quantity>
        {quantity}
      </Quantity>
    </Bullet>
  );
};

export default QuantityBullet;
