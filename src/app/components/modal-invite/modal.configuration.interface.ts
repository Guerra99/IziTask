export class ModalConfigurationInterface {
    title: string;
    text: string;
    buttons: {
        text: string,
        callback: () => void
    }[];
}
