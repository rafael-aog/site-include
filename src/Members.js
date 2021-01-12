import React from 'react';
import './App.css';
import Img25 from './assets/imagens/img1.png';
import Img26 from './assets/imagens/img2.png';
import Img27 from './assets/imagens/img3.png';
import Img28 from './assets/imagens/img4.png';
import Img29 from './assets/imagens/img5.png';
import Img30 from './assets/imagens/img6.png';
import Img31 from './assets/imagens/img7.png';
import Img32 from './assets/imagens/img8.png';
import Img33 from './assets/imagens/img9.png';
import Img34 from './assets/imagens/img10.png';
import Img35 from './assets/imagens/img11.png';

const Members = () =>{
    return(
        <div id="conteudoMembros">
            <p class="tituloMembros">Membros</p>
            <ul class="Membros">
                <li id="membro1">
                    <img class="imgMembros" src={Img25} width="200px" height="191px"></img>
                    <p>Vinicius de Azevedo <br/> Diretor Presidente</p>
                </li>
                <li id="membro2">
                    <img class="imgMembros" src={Img26} width="200px" height="191px"></img>
                    <p>Tiago Wolsen <br/> Diretor de Vice-Presidência</p>
                </li>
                <li id="membro3">
                    <img class="imgMembros" src={Img27} width="200px" height="191px"></img>
                    <p>Maria Jamilli <br/> Diretora Administrativo-Financeiro</p>
                </li>
                <li id="membro4">
                    <img class="imgMembros" src={Img28} width="200px" height="191px"></img>
                    <p>Bruna Oliveira <br/> Assessora de Marketing</p>
                </li>
                <li id="membro5">
                    <img class="imgMembros" src={Img29} width="200px" height="191px"></img>
                    <p>Jaíslla Macêdo <br/> Assessora de Gestão de Pessoas</p>
                </li>
                <li id="membro6">
                    <img class="imgMembros" src={Img30} width="200px" height="191px"></img>
                    <p>Dorgival Rocha <br/> Assessor de Gestão de Pessoas</p>
                </li>
                <li id="membro7">
                    <img class="imgMembros" src={Img31} width="200px" height="191px"></img>
                    <p>Eduardo Soares <br/> Desenvolvedor</p>
                </li>
                <li id="membro8">
                    <img class="imgMembros" src={Img32} width="200px" height="191px"></img>
                    <p>Gustavo Jerônimo <br/> Desenvolvedor</p>
                </li>
                <li id="membro9">
                    <img class="imgMembros" src={Img33} width="200px" height="191px"></img>
                    <p>Ítalo Oliveira <br/> Desenvolvedor</p>
                </li>
                <li id="membro10">
                    <img class="imgMembros" src={Img34} width="200px" height="191px"></img>
                    <p>Lucas Lima <br/> Desenvolvedor</p>
                </li>
                <li id="membro11">
                    <img class="imgMembros" src={Img35} width="200px" height="191px"></img>
                    <p>Samuel Victor <br/> Desenvolvedor</p>
                </li>
            </ul>
        </div>
    );
}

export default Members;