import React, { useState } from "react";
import { Quiz } from "../interfaces/quiz";
import { QuizList } from "../quizzer/components/QuizList";
import quest from "../data/questions.json";
import { Button } from "react-bootstrap";
import { AddQuiz } from "../quizzer/components/AddQuiz";

{
    /*}
const QUIZZES = quest.map(
    (quiz: Quiz): Quiz => ({
        ...quiz,
        started: false,
        id: 0
    })
);
*/
}
export function Quizzer(): JSX.Element {
    const [quizzes, setQuizzes] = useState<Quiz[]>([]);
    {
        /* The empty brackets should contain QUIZZES*/
    }
    const [showAddModal, setShowAddModal] = useState<boolean>(false);
    const CloseAddModal = () => setShowAddModal(false);
    const SShowAddModal = () => setShowAddModal(true);

    function editQuiz(id: number, newQuiz: Quiz) {
        setQuizzes(
            quizzes.map((quiz: Quiz): Quiz => (quiz.id === id ? newQuiz : quiz))
        );
    }

    function deleteQuiz(id: number) {
        setQuizzes(quizzes.filter((quiz: Quiz): boolean => quiz.id !== id));
    }

    function addQuiz(newQuiz: Quiz) {
        const exisitng = quizzes.find(
            (quiz: Quiz): boolean => quiz.id === newQuiz.id
        );
        if (exisitng === undefined) {
            setQuizzes([...quizzes, newQuiz]);
        }
    }

    return (
        <div>
            <div>
                <QuizList
                    quizzes={quizzes}
                    editQuiz={editQuiz}
                    deleteQuiz={deleteQuiz}
                ></QuizList>
            </div>
            <div>
                <Button
                    variant="success"
                    className="m-4"
                    onClick={SShowAddModal}
                >
                    Add New Quiz
                </Button>
                <AddQuiz
                    appears={showAddModal}
                    close={CloseAddModal}
                    addQuiz={addQuiz}
                ></AddQuiz>
                <h3>
                    All components work individually however, I have been
                    unsuccessful at getting them all to work together :(. My
                    sketches were VERY idealistic and unfortunately could not be
                    achieved with what time I had.
                </h3>
                <div>
                    <img
                        src={require("./SketchPage1.jpg")}
                        alt="first page of sketch"
                    ></img>
                </div>
                <div>
                    <img
                        src={require("./SketchPage2.jpg")}
                        alt="second page of sketch"
                    ></img>
                </div>
                <div>
                    <img
                        src={require("./SketchPage3.jpg")}
                        alt="third page of sketch"
                    ></img>
                </div>
            </div>
        </div>
    );
}
