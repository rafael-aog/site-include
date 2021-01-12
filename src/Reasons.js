import React from 'react';
import './App.css';
import Img4 from './assets/imagens/topico1.png';
import Img5 from './assets/imagens/topico2.png';
import Img6 from './assets/imagens/topico3.png';

const Reasons = () => {
    return(
        <div id="conteudoMotivos">
        <p class="motivosTitle">Por que escolher a Include?</p><br/>
            <ul>
                <li class="motivos1">
                    <img src={Img4}></img><br/><br/>
                    <p>Melhor Custo beneficio: como somos uma empresa júnior, 
                    temos um preço abaixo do mercado com produtos de qualidade e respaldo de especialistas da área.
                    </p>
                </li>
                <li class="motivos3">
                   <img src={Img6} ></img><br/><br/>
                    <p>Inovação: A Include busca constantemente novas tecnologias
                    e metodologias de trabalho. Composta por uma equipe comprometida com a inovação.
                    </p>
                </li>
                <li class="motivos2">
                    <img src={Img5} ></img><br/><br/>
                    <p>Projetos pesonalizados: Oferecemos serviços personalizáveis de acordo com as reais necessidades
                    do seu negócio.
                    </p>
                </li>
            </ul>
       </div>
    );
}

export default Reasons;