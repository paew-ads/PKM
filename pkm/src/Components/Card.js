import React from "react";
import { Card, CardDeck, Container, Button } from "react-bootstrap";

export default function card() {
  return (
    <Container>
      <CardDeck>
        <Card.Link href="#1">
          <Card
            className="text-center"
            bg="success"
            text="white"
            style={{ width: "19rem", height: "16rem" }}
          >
            <Card.Title></Card.Title>
            <br />
            <br />
            <br />
            <Card.Body>
              <Card.Text>
                {" "}
                <svg
                  width="3em"
                  height="3em"
                  viewBox="0 0 16 16"
                  class="bi bi-calendar-range"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
                  />
                  <path d="M9 7a1 1 0 0 1 1-1h5v2h-5a1 1 0 0 1-1-1zM1 9h4a1 1 0 0 1 0 2H1V9z" />
                </svg>{" "}
                ระบบการจองต่างๆ
              </Card.Text>
            </Card.Body>
          </Card>
        </Card.Link>

        <Card.Link href="#2">
          <Card
            className="text-center"
            bg="secondary"
            text="white"
            style={{ width: "19rem", height: "16rem" }}
          >
            <Card.Title></Card.Title>
            <br />
            <br />
            <br />
            <Card.Body>
              <Card.Text>
                {" "}
                <svg
                  width="3em"
                  height="3em"
                  viewBox="0 0 16 16"
                  class="bi bi-file-earmark-person"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
                  <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z" />
                  <path
                    fill-rule="evenodd"
                    d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                  />
                  <path d="M8 12c4 0 5 1.755 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12z" />
                </svg>{" "}
                ระบบตรวจสอบการทำงาน
              </Card.Text>
            </Card.Body>
          </Card>
        </Card.Link>

        <Card.Link href="#3">
          <Card
            className="text-center"
            bg="success"
            text="white"
            style={{ width: "19rem", height: "16rem" }}
          >
            <Card.Title></Card.Title>
            <br />
            <br />
            <br />
            <Card.Body>
              <Card.Text>
                {" "}
                <svg
                  width="3em"
                  height="3em"
                  viewBox="0 0 16 16"
                  class="bi bi-envelope"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"
                  />
                </svg>{" "}
                ระบบการลา
              </Card.Text>
            </Card.Body>
          </Card>
        </Card.Link>
      </CardDeck>
      <br />
      <br />
      <CardDeck>
        <Card.Link href="#4">
          <Card
            className="text-center"
            bg="secondary "
            text="white"
            style={{ width: "19rem", height: "16rem" }}
          >
            <Card.Title></Card.Title>
            <br />
            <br />
            <br />
            <Card.Body>
              <Card.Text>
                {" "}
                <svg
                  width="3em"
                  height="3em"
                  viewBox="0 0 16 16"
                  class="bi bi-list-check"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"
                  />
                </svg>{" "}
                ระบบตรวจสอบสินค้า
              </Card.Text>
            </Card.Body>
          </Card>
        </Card.Link>

        <Card.Link href="#5">
          <Card
            className="text-center"
            bg="success"
            text="white"
            style={{ width: "19rem", height: "16rem" }}
          >
            <Card.Title></Card.Title>
            <br />
            <br />
            <br />
            <Card.Body>
              <Card.Text>
                {" "}
                <svg
                  width="3em"
                  height="3em"
                  viewBox="0 0 16 16"
                  class="bi bi-clipboard-plus"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3zM8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"
                  />
                </svg>{" "}
                ระบบการจองต่างๆ
              </Card.Text>
            </Card.Body>
          </Card>
        </Card.Link>

        <Card.Link href="#6">
          <Card
            className="text-center"
            bg="secondary "
            text="white"
            style={{ width: "19rem", height: "16rem" }}
          >
            <Card.Title></Card.Title>
            <br />
            <br />
            <br />
            <Card.Body>
              <Card.Text>
                {" "}
                <svg
                  width="3em"
                  height="3em"
                  viewBox="0 0 16 16"
                  class="bi bi-clipboard-plus"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3zM8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"
                  />
                </svg>{" "}
                ระบบการจองต่างๆ
              </Card.Text>
            </Card.Body>
          </Card>
        </Card.Link>
      </CardDeck>
    </Container>
  );
}
