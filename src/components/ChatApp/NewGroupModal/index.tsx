import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NewGroupForm } from '../../../interfaces/NewGroupForm';
import { joinChatroom } from '../../../redux/Chatrooms/action';
import { StoreState } from '../../../redux/interface';
import { changeGroupPicture, createNewGroup } from '../../../service/chatrooms';
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
  const { UserReducer } = useSelector((state: StoreState) => state);
  const [newGroupFormValue, setNewGroupFormValue] = useState<NewGroupForm>({
    isPrivate: true,
    name: '',
  });
  const dispatch = useDispatch();

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

  const postNewGroup = async () => {
    const { isPrivate, name } = newGroupFormValue;
    const response = await createNewGroup({
      isPrivate,
      name,
      owner_id: UserReducer.id,
    });
    return response.data.id;
  };

  const createGroup = async () => {
    try {
      const groupId = await postNewGroup();
      const photoUrl = await uploadGroupPhoto(groupId);
      adicionarNovoGrupoRedux(photoUrl, groupId);
      close();
    } catch (err) {
      console.log('não implementado');
    }
  };

  const uploadGroupPhoto = async (groupId: string): Promise<string> => {
    const formData = new FormData();
    formData.append('picture', newGroupFormValue.photo);
    const response = await changeGroupPicture(formData, groupId);
    return response.data.photoUrl;
  };

  const adicionarNovoGrupoRedux = (photoUrl: string, groupId: string) => {
    const {
      id, lastName, name, photo,
    } = UserReducer;
    dispatch(joinChatroom({
      id: groupId,
      members: [{
        id,
        lastName,
        memberSince: new Date(),
        name,
        photo,
        role: 'OWNER',
      }],
      messages: [],
      name: newGroupFormValue.name,
      newMessages: 0,
      photo: photoUrl,
    }));
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
          onClick={createGroup}
        />
      </Container>
    </Modal>
  );
};

export default NewGroupModal;
