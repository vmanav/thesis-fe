const CodeOutput = ({ output, className }) => (
    <div className={className}>
        <pre className="output-box">{output}</pre>
    </div >
);

export default CodeOutput;
