import React from 'react';
import './App.css';
import Carousel from 'react-bootstrap/Carousel';
import Img1 from './assets/imagens/evento1.png';
import Img2 from './assets/imagens/evento2.png';
import Img3 from './assets/imagens/evento3.png';
import Img36 from './assets/imagens/evento4.jpg';
import Img37 from './assets/imagens/evento5.jpg';

const Events = () => {
    return(
      <div id="conteudoEventos">
          <p class="eventosTitle">Eventos</p>
          <Carousel indicators={false}>
              <Carousel.Item>
                  <div className="carousel-imagem">
                  <img
                      src={Img1}
                      width="450px"
                      height="417px"
                      alt="First slide"
                  />
                  </div>
                  <Carousel.Caption>
                  <h3>Destine 2018</h3>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <div className="carousel-imagem">
                  <img
                      src={Img2}
                      width="450px"
                      height="417px"
                      alt="Second slide"
                  />
                  </div>
                  <Carousel.Caption>
                  <h3>Campus Party 2019</h3>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <div className="carousel-imagem">
                  <img
                      src={Img3}
                      width="450px"
                      height="417px"
                      alt="Third slide"
                  />
                  </div>
                  <Carousel.Caption>
                  <h3>Destine 2019</h3>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <div className="carousel-imagem">
                  <img
                      src={Img36}
                      width="450px"
                      height="417px"
                      alt="Third slide"
                  />
                  </div>
                  <Carousel.Caption>
                  <h3>Pulso 2017</h3>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <div className="carousel-imagem">
                  <img
                      src={Img37}
                      width="450px"
                      height="417px"
                      alt="Third slide"
                  />
                  </div>
                  <Carousel.Caption>
                  <h3>Cientec</h3>
                  </Carousel.Caption>
              </Carousel.Item>
              </Carousel>
              
          </div>
    );
}

export default Events;