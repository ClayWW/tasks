import React, { useState } from "react";
import { Quiz } from "../../interfaces/quiz";
import { Question } from "../../interfaces/question";
import { QuestionList } from "./QuestionList";
import { EditQuiz } from "./EditQuiz";
import { Button, Col, Container, Row } from "react-bootstrap";

export function ViewQuizzes({
    quiz,
    editQuiz,
    deleteQuiz
}: {
    quiz: Quiz;
    editQuiz: (id: number, newOne: Quiz) => void;
    deleteQuiz: (id: number) => void;
}): JSX.Element {
    const [points, setPoints] = useState<number>(0);
    const [showAll, setShowAll] = useState<boolean>(false);
    const [questions, setQuestions] = useState<Question[]>(quiz.questions);
    const [editMode, setEditMode] = useState<boolean>(false);
    const [visible, setVisible] = useState<boolean>(false);

    function changeShowAll(): void {
        setShowAll(!showAll);
    }

    function changeVisible(): void {
        setVisible(!visible);
    }

    function changePoints(changed: number) {
        setPoints(points + changed);
    }

    function changeEditMode() {
        setEditMode(!editMode);
    }

    return editMode ? (
        <EditQuiz
            changeEditMode={changeEditMode}
            quiz={quiz}
            editQuiz={editQuiz}
            deleteQuiz={deleteQuiz}
            setQuestions={setQuestions}
            questions={questions}
        ></EditQuiz>
    ) : (
        <Container>
            <Row>
                <Col>
                    <h3>{quiz.name}</h3>
                </Col>
            </Row>
            <Row>
                <p>{quiz.description}</p>
                <p>{quiz.questions.length} Questions Long</p>
            </Row>
            <Row>
                <Button onClick={changeVisible}>Start or Finish Quiz</Button>
                <Button onClick={changeEditMode}>Edit</Button>
            </Row>
            {visible && (
                <Row>
                    <p>
                        {points} awarded out of {quiz.points}
                    </p>
                    <Button onClick={changeShowAll}>
                        Show All/Only Published Questions
                    </Button>
                    <QuestionList
                        questions={questions}
                        changePoints={changePoints}
                        showAll={showAll}
                    ></QuestionList>
                </Row>
            )}
        </Container>
    );
}
