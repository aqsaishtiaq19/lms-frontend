import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

function TagTypesExample() {
  return (
    <StyledWrapper>
      <Button href="Pg2" className="custom-btn">
        Trending Courses
      </Button>

      <Button href="Pg2" className="custom-btn">
        Most Popular Courses
      </Button>

      <Button href="Pg2" className="custom-btn">
        Newly Added Courses
      </Button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  gap: 20px;
  padding: 20px;

  .custom-btn {
    background-color: #000 !important;
    border: none !important;

    padding: 12px 24px;

    border-radius: 30px;

    font-size: 16px;
    font-weight: 600;

    transition: all 0.3s ease;
  }

  .custom-btn:hover {
    background-color: #2f2f2f !important;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    gap: 12px;

    .custom-btn {
      width: 100%;
      max-width: 300px;

      font-size: 14px;
      padding: 10px 18px;
    }
  }
`;

export default TagTypesExample;