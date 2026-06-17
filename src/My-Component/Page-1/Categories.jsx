import Card from 'react-bootstrap/Card';
import CategoriesCard from './CategoriesCard';

function WithHeaderAndQuoteExample() {
  return (
    <>
      <Card>
        <Card.Body
          style={{
            backgroundColor: "lightgrey",
            marginTop: "50px",
            minHeight: "300px",
            height: "auto",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <blockquote className="blockquote mb-0">
            <h1 style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}>
              Top Categories
            </h1>

            <div>
              <p style={{ fontSize: "clamp(0.9rem, 2.5vw, 1rem)" }}>
                Still chasing a career because "everyone said it's a good option"?
              </p>

              <h2 style={{ fontSize: "clamp(1.2rem, 3vw, 2rem)" }}>
                Take a chill pill.
              </h2>

              <p style={{ fontSize: "clamp(0.9rem, 2.5vw, 1rem)" }}>
                Discover what matches your passion, your talent, and your personality.
                The best career is the one you actually enjoy waking up for.
              </p>
            </div>

            <footer className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>

      <CategoriesCard />
    </>
  );
}

export default WithHeaderAndQuoteExample;