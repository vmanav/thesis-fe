import ReactMarkdown from 'react-markdown';

const LessonRenderer = ({ lesson }) => (
    <>
        <h3>{lesson.title}</h3>
        <ReactMarkdown>{lesson.content}</ReactMarkdown>
    </>
);

export default LessonRenderer;
