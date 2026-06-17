
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ display: "flex", alignContent: "center", width: '100%', justifyContent: "center", height: "200px", marginTop: "50px",padding: "20px" ,backgroundColor: "rgb(168, 167, 170)" }}>
      <Card.Body>
        <Card.Title><h1>Browse Top Categories</h1></Card.Title>
        <Card.Text>
Get access to a wide range of 100+ professionally designed courses covering Information & Technology, Software Development, Photography & Design, Arts & Humanities, Business, and many other in-demand fields. Learn practical, job-ready skills through structured lessons, real-world projects, and guided learning paths that help you grow your knowledge and career step by step.        </Card.Text>
       
      </Card.Body>
    </Card>
  );
}

export default BasicExample;