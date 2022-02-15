import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically Hello World. Clay Wilfong has edited successfully.
            </p>
            <h1>Yo I just added another header.</h1>
            <img
                src="https://m.media-amazon.com/images/I/61Jigwd1kKL._AC_SL1500_.jpg"
                alt="A picture of a soccer ball"
            />
            <ul>
                <li>Number one</li>
                <li>Number two</li>
                <li>Number three</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "500px",
                                height: "200px",
                                backgroundColor: "red"
                            }}
                        >
                            Red Rectangle #1
                        </div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "500px",
                                height: "200px",
                                backgroundColor: "red"
                            }}
                        >
                            Red Rectangle #2
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
