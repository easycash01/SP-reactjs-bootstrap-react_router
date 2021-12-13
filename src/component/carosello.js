import {Carousel} from 'react-bootstrap';
import grafica1 from "../immagini/img1.jpg"
/* import grafica2 from "../immagini/grafica2.jpg" */
/* var img = [
    '../img/grafica1.jpg','../img/grafica2.jpg'
] */
function Mycarosello(props){
 return(   
 <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={grafica1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={grafica1}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      /* prendere il file da percorso public */
      src={process.env.PUBLIC_URL + 'immag/immagine3.jpg'}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
 )
}

export default Mycarosello;