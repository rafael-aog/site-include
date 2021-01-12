import React from 'react';
import './App.css';
import Img18 from './assets/imagens/logoInclude2.png';
import Img19 from './assets/imagens/logoFacebook.png';
import Img20 from './assets/imagens/logoInsta.png';
import Img21 from './assets/imagens/logoLinked.png';

const Contacts = () => {
    return(
        <div id="conteudoContatos">
        <p class="motivosTitle">Contato</p>
        <div className="fottercontent">
            <div class="contato1">
              <div>
                  <p>Endereço:</p>
                  <p>Centro de Tecnologia - S/N – Campus Universitário Lagoa Nova – Natal, RN</p>
              </div>
              <div>
                  <p>Telefone:</p>
                  <p>(84) 98880-7186</p>
              </div>
              <div>
                  <p>Email:</p>
                  <p>include.engenharia@gmail.com</p>
              </div>
            </div>
            <div className="logoIncludeContato">
                <img src={Img18}  width="215px" height="215px"></img>
                <div className="socialmedia">
                    <a target="_blank" href="https://www.facebook.com/Includejr"><img src={Img19} width="40px" height="40px"></img></a>
                    <a target="_blank" href="https://www.instagram.com/engenhariainclude/?hl=pt-br"><img src={Img20} width="40px" height="40px"></img></a>
                    <a target="_blank" href="https://www.linkedin.com/company/include-engenharia"><img src={Img21} width="40px" height="40px"></img></a>
                </div>
            </div>
        </div>
       </div>
    );
}

export default Contacts;