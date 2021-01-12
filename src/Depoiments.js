import React from 'react';
import './App.css';
import Carousel from 'react-bootstrap/Carousel';

const Depoiments = () =>{
    return(
        <div id="conteudoDepoimentos">
                <p class="motivosTitle">Depoimentos dos Nossos Clientes</p>
                <Carousel indicators={false}>
                    <Carousel.Item>
                        <div className="depConteiner">
                        <div className="my-cardDepoimento">
                            <p class="txtDepoimento">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p class="autorDepoimento">Rudi Gusmão</p>
                        </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="depConteiner">
                        <div className="my-cardDepoimento">
                            <p class="txtDepoimento">Preparo técnico e atendimento excelentes</p>
                            <p class="autorDepoimento">Kennedy de Medeiros Dantas</p>
                        </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="depConteiner">
                        <div className="my-cardDepoimento">
                            <p class="txtDepoimento">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p class="autorDepoimento">Rudi Gusmão</p>
                        </div>
                        </div>
                    </Carousel.Item>
                    </Carousel>
        </div>

    );
}

export default Depoiments;