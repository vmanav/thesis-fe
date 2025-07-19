const LessonNavigator = ({
    nextLesson, prevLesson, runCode,
}) => (
    <>
        <div className="nav-buttons">
            <button onClick={prevLesson}>⏪ Prev</button>
            <button onClick={runCode}>▶ Run Code</button>
            <button onClick={nextLesson}>Next ⏩</button>
        </div>
    </>
);

export default LessonNavigator;
