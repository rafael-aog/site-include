import React from 'react';
import './App.css';

import Img22 from './assets/imagens/lobo1.png'
import Img23 from './assets/imagens/comece1.png';
import Img24 from './assets/imagens/visionario1.png';

const VMVContent = () =>{
    return(
        <div id="conteudoVMV">
            <ul class="VMV">
                <li id="Valores">
                    <img className="simbolos" src={Img22}></img> 
                    <div id="conteudoValores">
                        <p id="tituloValores">Valores</p>
                        <p id="textoValores">Responsabilidade social<br/>
                                            Uivar com o MEJ<br/>
                                            Liderança proativa<br/>
                                            Executar para impactar<br/>
                                            Ser alcateia</p>
                    </div>
                </li>
                <li id="Missao">
                    <img className="simbolos" src={Img23}></img>
                    <div id="conteudoMissao">
                        <p id="tituloMissao">Missão</p>
                        <p id="textoMissao">Ser o elo entre a sociedade e o futuro, 
                        conectando pessoas através de sistemas de informação e automação, 
                        impactando vidas e potencializando o desenvolvimento profissional 
                        dos nossos membros.</p>
                    </div>
                </li>
                <li id="Visao">
                    <img className="simbolos" src={Img24}></img> 
                    <div id="conteudoVisao">
                        <p id="tituloVisao">Visão</p>
                        <p id="textoVisao">Sermos membros capacitados, conectados com a rede,
                            com estrutura interna bem definida, fazendo projetos que impactam e 
                            consquistando stakeholders promotores da marca.</p>
                    </div>
                </li>
            </ul>
            <br/><br/><br/>
        </div>
    );
}

export default VMVContent;