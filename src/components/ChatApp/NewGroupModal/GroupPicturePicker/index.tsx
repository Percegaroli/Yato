import React, { useRef } from 'react';
import {
  Title, Placeholder, Button, FileInput, ImageIcon,
} from './styles';

interface Props {
  onChange: (picture: File) => void
  value?: File
}

const GroupPicturePicker: React.FC<Props> = ({ onChange, value }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const renderImage = () => (value
    ? null
    : <Placeholder onClick={openInput} />);

  const openInput = () => {
    inputRef.current.click();
  };

  return (
    <>
      <Title>
        Foto
      </Title>
      {renderImage()}
      <FileInput
        type="file"
        ref={inputRef}
      />
      <Button onClick={openInput}>
        <ImageIcon />
      </Button>

    </>
  );
};

export default GroupPicturePicker;
