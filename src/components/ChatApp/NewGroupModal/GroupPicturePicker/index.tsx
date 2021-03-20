import React, { useRef, useState } from 'react';
import {
  Title, Placeholder, Button, FileInput, ImageIcon, Image,
} from './styles';

interface Props {
  onChange: (picture: File) => void
  value?: File
}

const GroupPicturePicker: React.FC<Props> = ({ onChange, value }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileUrl, setFileUrl] = useState('');

  const renderImage = () => (value
    ? <Image src={fileUrl} />
    : <Placeholder onClick={openInput} />);

  const openInput = () => {
    inputRef.current.click();
  };

  const createFileUrl = (file: File) => {
    setFileUrl(URL.createObjectURL(file));
  };

  const loadPhoto = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.files[0]);
    createFileUrl(event.target.files[0]);
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
        onChange={loadPhoto}
      />
      <Button onClick={openInput}>
        <ImageIcon />
      </Button>

    </>
  );
};

export default GroupPicturePicker;
