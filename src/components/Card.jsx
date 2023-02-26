import Language from "./Language";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { data } from "../helper/data";

const Card = () => {
  return (
    <Container className="rounded-4 mt-4 p-4" style={{ background: "#f48b29" }}>
      <h1 className="text-light my-4 p-2" >Languages</h1>
      <Row className="g-3 justify-content-center ">
        {data.map((lang, i) => {
          return (
            <Col key={i} sm={6} md={4} lg={3} >
              <Language {...lang}  />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Card;
