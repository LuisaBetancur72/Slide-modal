import React, { useState } from "react";
import Cube from "../cube/cube";
import Menu from "../menu/menu";
import Slider from "react-slick";
import "../twitt/slide.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.scss";
import { Fab, Grid, Modal, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Photo27 from "../../assets/images/27.jpeg";
import Photo28 from "../../assets/images/28.jpeg";
import Photo29 from "../../assets/images/29.jpeg";
import Photo30 from "../../assets/images/30.jpeg";

const settingsRTL = {
  dots: true,
  infinite: true,
  speed: 1590,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 1590,
  autoplay: true,
  rtl: true,
  centerMode: true,
  centerPadding: "0",
};

function Home() {
  const post = [
    {
      Id: "1",
      title: "dalia",
      subtitle: "campo de dalias ",
      description: "científicamente conocidas como Dahlia, son plantas herbáceas perennes que se caracterizan por sus atractivas y variadas flores. Estas flores son originarias de América Central y México",
      Create_at: "11/10/23",
      avatar: Photo27,
    },
    {
      Id: "2",
      title: "Oceano",
      subtitle: "Oceano atlantico ",
      description: " es el segundo océano más grande del mundo, después del Océano Pacífico. Se extiende entre América al oeste y Europa y África al este,",
      Create_at: "11/10/23",
      avatar: Photo28,
    },
    {
      Id: "3",
      title: "Faro",
      subtitle: "Francia",
      description: "Francia cuenta con una gran cantidad de faros impresionantes a lo largo de su extensa costa, cada uno con su propio carácter y belleza. Uno de los faros más icónicos y conocidos de Francia es el Faro de Cordouan.",
      Create_at: "11/10/23",
      avatar: Photo29,
    },
    {
      Id: "4",
      title: "Atardecer",
      subtitle: "Atardecer en las playas tijuana ",
      description: "ubicadas en Baja California, México, son verdaderamente impresionantes y ofrecen una experiencia única para los visitantes",
      Create_at: "11/10/23",
      avatar: Photo30,
    },
  ];

  const [selectedSection, setSelectedSection] = useState(null);

  const handleSectionClick = (sectionId) => {
    setSelectedSection(sectionId);
  };

  const [selectedposts, setSelectedposts] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (post) => {
    setSelectedposts(post);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedposts(null);
    setModalOpen(false);
  };

  return (
    <div className="home">
      <Cube />
      <Menu onSectionClick={handleSectionClick} />
      <div className="content">
        <section
          id="Flexbox"
          className={`section-padding1 ${
            selectedSection === "Flexbox" ? "active" : ""
          }`}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="slideContainer" id="slideContainer">
                  <Slider {...settingsRTL} className="slider">
                    {post.map((posts) => (
                      <Card
                        key={posts.Id}
                        onClick={() => handleOpenModal(posts)}
                        className={
                          selectedposts && selectedposts.Id === posts.Id
                            ? "active card"
                            : "card"
                        }
                      >
                        <CardMedia
                          className="cardMedia-post"
                          component="img"
                          src={posts.avatar}
                          alt="green iguana"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {posts.title}
                          </Typography>
                          <Typography gutterBottom variant="h5" component="div">
                            {posts.subtitle}
                          </Typography>
                          <Typography gutterBottom variant="h5" component="div">
                          <button className="button">Ver mas</button>
                          </Typography>
                        </CardContent>
                      </Card>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="Contact"
          className={`section-padding2 ${
            selectedSection === "Contact" ? "active" : ""
          }`}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-3 wow fadeInLeft delay-05s">
                <div className="section-title">
                  <a href="#Contact" target="_blank"></a>
                  <p className="sec-para"></p>
                </div>
              </div>
              <div className="col-md-9"></div>
            </div>
          </div>
        </section>
        <section
          id="Products"
          className={`section-padding3 ${
            selectedSection === "Products" ? "active" : ""
          }`}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-3 wow fadeInLeft delay-05s">
                <div className="section-title">
                  <a href="#Contact" target="_blank"></a>

                  <p className="sec-para"></p>
                </div>
              </div>
              <div className="col-md-9"></div>
            </div>
          </div>
        </section>
      </div>

      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 250,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <img
            src={selectedposts ? selectedposts.avatar : ''}
            alt="Imagen seleccionada"
            style={{ width: '100%', height: 'auto' }}
          />
          {selectedposts && (
            <div className="modal-service-info">
              <p>{selectedposts.title}</p>
              <p>{selectedposts.subtitle}</p>
              <p>{selectedposts.description}</p>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
}

export default Home;
