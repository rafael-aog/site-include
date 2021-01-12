import React from 'react';
import './App.css';
import Img7 from './assets/imagens/Servicos1.png';
import Img8 from './assets/imagens/Servicos2.png';
import Img9 from './assets/imagens/Servicos3.png';
import Img10 from './assets/imagens/Servicos4.png';
import Img11 from './assets/imagens/concepcao1.png';
import Img12 from './assets/imagens/concepcao2.png';
import Img13 from './assets/imagens/concepcao3.png';
import Img14 from './assets/imagens/concepcao4.png';

const Events = () => {
    return(
        <div id="conteudoServicos">
            <p class="eventosTitle">Serviços</p>

            <div class="flip-box">
                <div class="flip-box-inner">
                  <div class="flip-box-front">
                    
                    <img src={Img7} width="100.2%" height="100%"></img><br/>
                
                  </div>
                <div class="flip-box-back">

                  <img src={Img11} width="100.2%" height="100%"></img>
                </div>
            </div>
            </div>
                
            <div class="flip-box">
                <div class="flip-box-inner">
                  <div class="flip-box-front">
                
                    <img src={Img8} width="100.1%" height="100%"></img><br/>
                    
                  </div>
                  <div class="flip-box-back">

                    <img src={Img12} width="100.2%" height="100%"></img>
                  </div>
                </div>
            </div>
            <div class="flip-box">
                <div class="flip-box-inner">
                  <div class="flip-box-front">
                
                    <img src={Img9} width="100.2%" height="100%"></img><br/>
                </div>
                <div class="flip-box-back">

                    <img src={Img13} width="100.2%" height="100%"></img>
                  </div>
             </div>
            </div>
            
            <div class="flip-box">
                <div class="flip-box-inner">
                  <div class="flip-box-front">
                
                    <img src={Img10} width="100.2%" height="100%"></img><br/>
                    
                </div>
                <div class="flip-box-back">

                    <img src={Img14} width="100.2%" height="100%"></img>
                  </div>
                </div>
            </div>
            <p id="subotao">Se interessou por nossos serviços?</p>
            <div id="botao">
            <a href="#conteudoContatos" id="entreemcontato">Entre em Contato</a>
            </div>


       </div>
    );
}

export default Events;