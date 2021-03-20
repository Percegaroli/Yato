import React, { useState } from 'react';
import { NewGroupForm } from '../../../interfaces/NewGroupForm';
import FormItem from '../../UI/FormItem';
import Modal from '../../UI/Modal';
import GroupPicturePicker from './GroupPicturePicker';
import GroupPrivacy from './GroupPrivacy';
import { Title, Container, SendButton } from './styles';

interface Props {
  isShowing: boolean
  close: () => void
}

const NewGroupModal: React.FC<Props> = (props: Props) => {
  const { close, isShowing } = props;
  const [newGroupFormValue, setNewGroupFormValue] = useState<NewGroupForm>({
    isPrivate: true,
    name: '',
  });

  const changeGroupName = (name: string) => {
    setNewGroupFormValue({
      ...newGroupFormValue,
      name,
    });
  };

  const changePicture = (picture: File) => {
    setNewGroupFormValue({
      ...newGroupFormValue,
      photo: picture,
    });
  };

  const changeGroupPrivacy = (privacy: boolean) => {
    setNewGroupFormValue({
      ...newGroupFormValue,
      isPrivate: privacy,
    });
  };

  return (
    <Modal
      isShowing={isShowing}
      closeModal={close}
    >
      <Container>
        <Title>
          Criar um novo grupo
        </Title>
        <GroupPicturePicker
          value={newGroupFormValue.photo}
          onChange={changePicture}
        />
        <FormItem
          label="Nome"
          value={newGroupFormValue.name}
          onChange={(event) => changeGroupName(event.target.value)}
          placeholder="..."
        />
        <GroupPrivacy
          isGroupPrivated={newGroupFormValue.isPrivate}
          setGroupPrivacy={changeGroupPrivacy}
        />
        <SendButton
          text="Criar grupo"
        />
      </Container>
    </Modal>
  );
};

export default NewGroupModal;
