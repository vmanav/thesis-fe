import Editor from '@monaco-editor/react';

const CodeEditor = ({ code, setCode }) => (
    <Editor
        height="200px"
        defaultLanguage="rust"
        value={code}
        onChange={(val) => setCode(val)}
    />
);

export default CodeEditor;
