import ReactMarkdown from 'react-markdown';

import styles from './LessonRenderer.module.css'

const LessonRenderer = ({ lesson }) => (
    <div className={styles.root} >
        <h2 className={styles.title}>{lesson.title}</h2>
        <ReactMarkdown>{lesson.content}</ReactMarkdown>
    </div>
);

export default LessonRenderer;
