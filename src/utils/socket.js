import { socketDataTypes } from "../constants/socketDataTypes";

export function createSocket(
    code,
    onMessage,
    onInputPrompt,
    onComplete,
    onError,
    setHasError
) {
    const sock = new WebSocket("ws://localhost:8000/execute");

    sock.onopen = () => {
        sock.send(JSON.stringify({ code }));
    };

    sock.onmessage = ({ data }) => {
        setHasError(false);
        const socketData = JSON.parse(data);
        if (socketData.type === socketDataTypes.INPUT_PROMPT) {
            onInputPrompt(true)
        } else if (socketData.type === socketDataTypes.OUTPUT) {
            onMessage(socketData.content);
        } else if ([socketDataTypes.ERROR, socketDataTypes.STDERR].includes(socketData.type)) {
            onError(socketData.message);
        } else if (socketData.type === socketDataTypes.EXECUTED) {
            onComplete();
            sock.close();
        }
    };

    return sock;
}
