import React, { useEffect, useState } from 'react';
import { ReactComponent as MainImage } from 'core/assets/images/main-image.svg';
import ButtonIcon from 'core/components/ButtonIcon';
import { Link} from 'react-router-dom';
import './styles.scss';
import { makePrivateRequest } from 'core/utils/request';
import HomeLoader from './components/HomeLoader';

const Home = () => {

    const[isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        makePrivateRequest({ url: '/'})
        .then(response => response.data)
        .finally(() => setIsLoading(false));
    }, []);

    return (
        <div className="home-container">
            {isLoading ? <HomeLoader /> : (
                <div className="home-content card-base border-radius-20">
                <div className="home-text">
                     <h1 className="text-title">
                         Conheça o melhor<br/> catálogo de produtos
                     </h1>
                     <p className="text-subtitle"> 
                         Ajudaremos você a encontrar os melhores<br/> produtos disponíveis no mercado
                     </p>
                     <Link to="/products" className="startSearchBtn">
                         <ButtonIcon text="inicie agora a sua busca" />
                     </Link>
                </div>
                <div className="col-6">
                     <MainImage className="main-images" />
                </div>
            </div>
        
            )}
         </div>   
    );
}

export default Home;