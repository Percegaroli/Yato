import React from 'react';

interface Props {
  orientation: 'vertical' | 'horizontal'
}

const Divisor: React.FC<Props> = (props: Props) => {
  const { orientation } = props;
  return <div />;
};

export default Divisor;
