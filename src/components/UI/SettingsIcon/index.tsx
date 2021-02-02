import React from 'react';
import { Settings } from './styles';

interface Props {
  selected?: boolean,
  className?: string
}

const SettingsIcon: React.FC<Props> = (props: Props) => {
  const { selected, className } = props;
  return (
    <Settings
      selected={selected}
      className={className}
    />
  );
};

SettingsIcon.defaultProps = {
  selected: false,
  className: '',
};

export default SettingsIcon;
