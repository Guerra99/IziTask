import { ModalType } from './modal.-type.enum';

export interface ModalConfigurationInterface {
  text: string;
  modalType: ModalType;
  buttons: {
    text: string,
    color?: string,
    backgroundColor?: string,
    callback: () => void
  }[];
}
