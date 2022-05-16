import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Container, Card, Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.homeBody}>
          <div className={styles.content}>
            <Navbar bg="dark">
              <Container>
                <Navbar.Brand href="#home" className="">
                  <img
                    src="https://e7.pngegg.com/pngimages/993/363/png-clipart-pokeball-pokeball.png"
                    width="150"
                    height="150"
                    className="d-inline-block align-top "
                    alt="React Bootstrap logo"
                  />
                </Navbar.Brand>
              </Container>
            </Navbar>

            <div className={styles.container}>
              <Row>
                <Col sm={6} className={styles.cardHome}>
                  <Card style={{ width: "18rem" }}>
                    <a href="/detailPage">
                      <Card.Img
                        variant="top"
                        src="https://w7.pngwing.com/pngs/585/436/png-transparent-pokemon-pikachu-illustration-icon-pikachu-background-mammal-food-vertebrate-thumbnail.png"
                      />
                    </a>
                    <Card.Body>
                      <a href="/detailPage">
                        <Card.Title className={styles.name}>
                          {" "}
                          Pikachu
                        </Card.Title>
                      </a>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={6} className={styles.cardHome}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src="https://w7.pngwing.com/pngs/585/436/png-transparent-pokemon-pikachu-illustration-icon-pikachu-background-mammal-food-vertebrate-thumbnail.png"
                    />
                    <Card.Body>
                      <Card.Title>Pikachu</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              <div className={styles.footer}>
                <Row>
                  <Col className={styles.homeFooter} sm={6}>
                    <a className={styles.pokemon} href="/">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 576 512"
                        className="w-8 h-8 text-white"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                      </svg>
                      Home
                    </a>
                  </Col>
                  <Col sm={6}>
                    <div className="Btn-Favorites">
                      <a className={styles.pokemonList} href="/Favorites">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 24 24"
                          class="w-8 h-8 text-white"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M14.5 12a2.5 2.5 0 01-5 0 2.5 2.5 0 015 0zm7.5 0c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zm-2 0h-4c0-2.21-1.79-4-4-4s-4 1.79-4 4H4c0 4.41 3.59 8 8 8s8-3.59 8-8z"></path>
                        </svg>
                        My Pokemon List
                      </a>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
