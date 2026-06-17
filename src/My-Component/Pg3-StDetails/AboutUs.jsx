
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function AboutCard() {
  return (
    <div id='about'>    <div style={styles.wrapper}>
      <Card style={styles.card}>
        <Card.Header style={styles.header}>About Us</Card.Header>

        <Card.Body>
          <Card.Title style={styles.title}>
            The leading global marketplace for learning and instruction
          </Card.Title>

          <Card.Text style={styles.text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores perspiciatis est delectus accusantium dolorem consequuntur ducimus aliquam et similique facilis reiciendis fugit blanditiis eaque voluptatem hic cumque a, ad veritatis!
          </Card.Text>

          <Button variant="dark">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
    </div>

  );
}

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: "20px",
    background: "#d1d5db", // grey background
  },

  card: {
    maxWidth: "600px",
    width: "100%",
    background: "#e5e7eb",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    border: "none",
  },

  header: {
    background: "#9ca3af",
    fontWeight: "bold",
    color: "black",
  },

  title: {
    fontSize: "22px",
    fontWeight: "800",
    color: "black",
    marginBottom: "15px",
  },

  text: {
    fontSize: "18px",
    fontWeight: "500",
    background: "#f3f4f6",
    padding: "15px",
    borderRadius: "8px",
    color: "#111",
    lineHeight: "1.6",
  },
};

export default AboutCard;