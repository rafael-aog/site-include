import React from 'react';
import './App.css';
import { Link } from "react-router-dom";

const IncludeHeader = () => {
    return (
        <div id="cabecalho">
            <nav>
                <ul id="ulBarra">	
                    <a href="home.html">
                      <li id="opcaoImg">
                        <img src="./imagens/logoInclude1.png" width="150px" height="141px"></img>
                      </li>
                    </a>
                    <a href="#conteudoContatos"><li class="opcao">CONTATO</li></a>
                    <Link to="/sobrenos"><li class="opcao">SOBRE NÓS</li></Link>
                    <Link to="/"><li class="opcao">HOME</li></Link>
                </ul>
            </nav>
       </div>
    );
}

export default IncludeHeader;