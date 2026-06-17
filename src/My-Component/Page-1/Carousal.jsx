import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../images/Pg1/uni-hero-pic.jpg';
import img2 from '../../images/Pg1/uni-hero-4.jpg';
import img3 from '../../images/Pg1/ui-hero-3.jpg';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
          style={{ opacity: 0.6 }}
        />
        <Carousel.Caption style={{ color: "black" }}>
          <h1>We Help You Learn
            <br /> What YOu Love</h1>
          <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod quia natus beatae laborum aspernatur magnam?</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
          style={{ opacity: 0.6 }}
        />
        <Carousel.Caption style={{ color: "black" }}>
          <h1>JOIN US 
            <br />Start Your Free Course </h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
          style={{ opacity: 0.6 }}
        />
        <Carousel.Caption style={{ color: "black" }}>
          <h1>LEARN ANYTHING <br /> ANYTIME
          <br /> ANYWHERE
          </h1>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default DarkVariantExample;