import React from 'react';
import './App.css';
import Img15 from './assets/imagens/parceiro1.png';
import Img16 from './assets/imagens/parceiro2.png';
import Img17 from './assets/imagens/parceiro3.png';

const Content = () => {
    return(
        <div id="conteudoParceiros">
            <p class="motivosTitle">Instâncias e Parceiros</p>
                <ul className = "parceiros">
                    <li class="parceiro23">
                        <a target="_blank" href="https://www.animuscj.com.br/"><img src={Img15} width="155px" height="120px"></img></a>
                        <p className="parceirodesc">Empresa júnior de consultoria jurídica.</p>
                    </li>
                    <li class="parceiro23">
                        <a target="_blank" href="https://brasiljunior.org.br/"><img src={Img16} width="155px" height="120px"></img></a>
                        <p className="parceirodesc">Confederação nacional de empresas juniores.</p>
                    </li>
                    <li class="parceiro23">
                    <a target="_blank" href="https://www.rnjunior.com.br/"><img src={Img17} width="155px" height="120px"></img></a>
                        <p className="parceirodesc">Federação estadual de empresas juniores do Rio Grande do Norte.</p>
                    </li>
                </ul>
        </div>
    );
}

export default Content;