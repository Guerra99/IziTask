export class ModalConfigurationInterface {
    text: string;
    buttons: {
        text: string,
        callback: () => void
    }[];
}
