import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';

function ShapeExample() {
  return (
    <StyledWrapper>
      <Container fluid>
        <Row>
          <Col xs={12} className="left-section">
            <Image
              src="/images2/Pg3/boy.pic"
              roundedCircle
              className="profile-img"
            />
          </Col>
        </Row>
      </Container>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .left-section {
    display: flex;
    justify-content: flex-start;

    padding: 20px;
  }

  .profile-img {
    width: 180px;
    height: 180px;

    object-fit: cover;

    border: 4px solid #000;

    transition: transform 0.3s ease;
  }

  .profile-img:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    .profile-img {
      width: 130px;
      height: 130px;
    }

    .left-section {
      padding: 10px;
    }
  }
`;

export default ShapeExample;