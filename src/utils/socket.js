import { socketDataTypes } from "../constants/socketDataTypes";

export function createSocket(code, onMessage, onInputPrompt, onComplete, onError) {
    const sock = new WebSocket("ws://localhost:8000/ws/execute");

    sock.onopen = () => {
        sock.send(JSON.stringify({ code }));
    };

    sock.onmessage = ({ data }) => {
        const socketData = JSON.parse(data);
        if (socketData.type === socketDataTypes.INPUT_PROMPT) {
            onInputPrompt(socketData.prompt)
        } else if (socketData.type === socketDataTypes.OUTPUT) {
            onMessage(socketData.content);
        } else if (socketData.type === socketDataTypes.STDERR) {
            onError(socketData.content);
        } else if (socketData.type === socketDataTypes.EXECUTED) {
            onComplete();
            sock.close();
        }
    };

    return sock;
}
