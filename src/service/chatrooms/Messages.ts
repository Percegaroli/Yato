import { Message } from '../../redux/Chatrooms/interface';
import { MessageDTO } from '../autenticacao/interface/LoginResponse';

export const mapearNovasMensagensRedux = (
  mensagensExistentes: Array<Message>,
  novasMensagens: Array<MessageDTO>,
): Array<Message> => {
  const copiaMensagensExistentes = [...mensagensExistentes];
  novasMensagens.forEach((mensagem) => criarNovaMensagemRedux(mensagem, copiaMensagensExistentes));
  return copiaMensagensExistentes;
};

export const criarNovaMensagemRedux = (
  mensagem: MessageDTO,
  mensagensExistentes: Array<Message>,
): void => {
  const mensagensLength = mensagensExistentes.length;
  if (mensagensExistentes.length === 0) {
    mensagensExistentes.push(criarNovaMensagem(mensagem));
  } else if (mensagensExistentes[mensagensLength - 1].ownerId === mensagem.user_id) {
    mensagensExistentes[mensagensLength - 1].lines.push(mensagem.message);
  } else {
    mensagensExistentes.push(criarNovaMensagem(mensagem));
  }
};

const criarNovaMensagem = (mensagem: MessageDTO): Message => ({
  lines: [mensagem.message],
  ownerId: mensagem.user_id,
  sendAt: mensagem.date,
});

export default {};
