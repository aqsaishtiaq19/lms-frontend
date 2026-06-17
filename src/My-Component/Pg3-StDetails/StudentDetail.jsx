import StImg from './StImg';
import Card from 'react-bootstrap/Card';

function TextExample() {
  return (
    <Card style={{ width: '100%', backgroundColor: 'lightgray' }}>
      <Card.Body>
        <StImg />

        <Card.Title>
          <h1>Alex</h1>
        </Card.Title>

        <div>
          <h3>Bio</h3>
          <h4>Freelancer & Web Developer</h4>
        </div>

        <p>
          Alex is a passionate web developer and freelance instructor with
          experience in modern technologies such as React, Node.js, Express,
          and MongoDB. He enjoys building scalable applications, teaching
          practical development skills, and helping students transform their
          ideas into real-world projects.
        </p>

        <Card.Link href="SignIn">Sign Up</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default TextExample;