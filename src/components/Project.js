import { Container, Tab, Col, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp from "../assets/img/color-sharp.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";

export const Project = () => {

  const project = [
    {
      title: "Logo 1",
      description: "Qline",
      imgUrl: projImg1,
    },
    {
      title: "Logo 2",
      description: "RPL 1",
      imgUrl: projImg2,
    },
    {
      title: "Logo 3",
      description: "Aml",
      imgUrl: projImg3,
    },
    {
        title: "Logo 3",
        description: "Aml",
        imgUrl: projImg3,
    },
    {
        title: "Logo -",
        description: "-",
        imgUrl: projImg4,
    },
    {
        title: "Logo 1",
        description: "Qline",
        imgUrl: projImg1,
      }
  ];

  return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Karya</h2>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Logo</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        project.map((project, index) => {
                                            return(
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                    />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp}></img>
        </section>
  )
}