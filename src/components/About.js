import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const About = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="about">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>About Me</h2><br /><br />
                            <p>Saya adalah siswa kelas 12 di SMKN 6 Jember.<br></br> mengambil jurusan Rekayasa Perangkat Lunak. Di sekolah ini, saya telah mendalami dasar-dasar pemrograman, analisis sistem, dan desain perangkat lunak.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
      )
}