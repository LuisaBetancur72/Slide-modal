import React, { useState, useRef } from "react";
import Cube from "../cube/cube";
import Menu from "../menu/menu";
import Slider from "react-slick";
import "../twitt/slide.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.scss";
import { Fab, Modal, Box, Button } from "@mui/material";
import {Card, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Favorite from "@mui/icons-material/Favorite";
import Photo27 from "../../assets/images/dalia.jpg";
import Photo28 from "../../assets/images/oceano.jpg";
import Photo29 from "../../assets/images/faro.jpg";
import Photo30 from "../../assets/images/30.jpeg";

const settingsRTL = {
  dots: true,
  infinite: true,
  speed: 590,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 5590,
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
      description:
        "científicamente conocidas como Dahlia, son plantas herbáceas perennes que se caracterizan por sus atractivas y variadas flores. Estas flores son originarias de América Central y México",
      Create_at: "11/10/23",
      avatar: Photo27,
    },
    {
      Id: "2",
      title: "Oceano",
      subtitle: "Oceano atlantico ",
      description:
        " es el segundo océano más grande del mundo, después del Océano Pacífico. Se extiende entre América al oeste y Europa y África al este,",
      Create_at: "11/10/23",
      avatar: Photo28,
    },
    {
      Id: "3",
      title: "Faro",
      subtitle: "Francia",
      description:
        "Francia cuenta con una gran cantidad de faros impresionantes a lo largo de su extensa costa, cada uno con su propio carácter y belleza. Uno de los faros más icónicos y conocidos de Francia es el Faro de Cordouan.",
      Create_at: "11/10/23",
      avatar: Photo29,
    },
    {
      Id: "4",
      title: "Atardecer",
      subtitle: "Atardecer en las playas Tijuana ",
      description:
        "ubicadas en Baja California, México, son verdaderamente impresionantes y ofrecen una experiencia única para los visitantes",
      Create_at: "11/10/23",
      avatar: Photo30,
    },
  ];

  const [selectedSection, setSelectedSection] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedposts, setSelectedposts] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (post, action) => {
    setSelectedposts(post);
    setModalOpen(true);
    if (action === "Favorite") {
      const isFavorite = favorites.some((item) => item.Id === post.Id);
      if (!isFavorite) {
        setFavorites([...favorites, post]);
      }
    }
    if (action === "ShoppingCart") {
      const isCartItem = cart.some((item) => item.Id === post.Id);
      if (!isCartItem) {
        setCart([...cart, post]);
      }
    }
  };

  const handleCloseModal = () => {
    setSelectedposts(null);
    setModalOpen(false);
  };

  const handleSectionClick = (sectionId) => {
    setSelectedSection(sectionId);
  };

  const contactSectionRef = useRef(null);

  const handleScrollToContact = () => {
    if (contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
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
                        <CardContent className="CardContent">
                          <Typography gutterBottom variant="h5" component="div">
                            {posts.title}
                          </Typography>
                          <Typography gutterBottom variant="h5" component="div">
                            {posts.subtitle}
                          </Typography>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() => handleOpenModal(posts)}
                          >
                            Ver mas
                          </Button>
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
          ref={contactSectionRef}
          className={`section-padding2 ${
            selectedSection === "Contact" ? "active" : ""
          }`}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-3 wow fadeInLeft delay-05s">
                <div className="section-title">
                  <p className="sec-para"></p>
                </div>
              </div>
              <div className="col-md-9">
                <Card>
                  <CardContent className="CardContent">
                    <Typography variant="h6">
                      Mis Favoritos ({favorites.length})
                    </Typography>
                    <table className="Table-fav">
                      <tbody>
                        {favorites.map((fav) => (
                          <tr key={fav.Id}>
                            <td>
                              <img
                                src={fav.avatar}
                                alt="Imagen de favorito"
                                className="table-image"
                              />
                            </td>
                            <td variant="h2">{fav.title}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </CardContent>
                </Card>
              </div>
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
                  <p className="sec-para"></p>
                </div>
              </div>
              <div className="col-md-9">
                <Card className="card-table">
                  <CardContent className="CardContent">
                    <Typography variant="h6">
                      Mis Compras ({cart.length})
                    </Typography>
                    <table className="Table-fav">
                      <tbody>
                        {cart.map((fav) => (
                          <tr key={fav.Id}>
                            <td>
                              <img
                                src={fav.avatar}
                                alt="Imagen de favorito"
                                className="table-image"
                              />
                            </td>
                            <td variant="h1">{fav.title}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Modal
        className="modal-slide"
        open={modalOpen}
        onClose={() => handleCloseModal(selectedSection)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box className="Box-slide">
          <img
            src={selectedposts ? selectedposts.avatar : ""}
            alt="Imagen seleccionada"
          />
          {selectedposts && (
            <div className="modal-service-info">
              <h1>{selectedposts.title}</h1>
              <h3>{selectedposts.subtitle}</h3>
              <p>{selectedposts.description}</p>
            </div>
          )}
          <div className="button-fav-group">
            <Fab
              color="primary"
              aria-label="Favorite"
              className="Favorite"
              onClick={() => handleOpenModal(selectedposts, "Favorite")}
            >
              <Favorite />
            </Fab>
            <Fab
              color="secondary"
              aria-label="ShoppingCart"
              className="ShoppingCart"
              onClick={() => handleOpenModal(selectedposts, "ShoppingCart")}
            >
              <AddShoppingCartIcon />
            </Fab>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Home;
