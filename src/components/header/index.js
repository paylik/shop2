
import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {

    static path = '/';

    render () {
        return (
            <div>
                 <div className='logo'>
                    <div className='logo_logo'> <a href='index.html'><img src='img/logo-jenavi-smorgon-3.png' alt='logo' width={380} height={184} /></a>
                    </div>
                    <div className='logo_time'>
                        <h2>ТОРГОВЫЙ ОБЪЕКТ 'ЖЕНАВИ' </h2>
                        <h3>РЕЖИМ РАБОТЫ: <br />
                            пн-пт 10<sup>00</sup>-20<sup>00</sup>, сб-вс 10<sup>00</sup>-19<sup>00</sup>, перерыв 14<sup>00</sup>-15<sup>00</sup></h3>
                        <p>Директор Ольга Николаевна +375-29-782-33-37 (мтс) </p>
                    </div>
                    <div className='logo_swarovsky'><a href='img/scan.PDF'><img src='img/Swarovski-logo.jpg' width={184} height={184} alt='logo' /></a></div>
                </div>
                <nav> 
                 <ul>
                    <li>Главная</li>
                    <li>Продукция</li>
                    <li>Видео</li>
                    <li>Акции</li>
                    <li>Подарочные <br /> сертификаты</li>
                    <li>Гарантии</li>
                    <li>О нас</li>
                </ul>
                    <div className='hovered'>
                        <div className='prod'>
                            <ul>
                                <li><img src='img/logo-jenavi.jpg' width={62} height={30} />Бижутерия 'JENVI'</li>
                                <li><img src='img/bigGlass.jpg' width={62} height={30} />Солнцезащитные очки</li>
                                <li><img src='img/toys-small.jpg' width={62} height={30} />Мягкая игрушка</li>
                                <li><img src='img/bow.jpg' width={62} height={30} />Аксессуары для волос </li>
                                <li><img src='img/jevely-small.jpg' width={62} height={30} />Китайская бижутерия</li>
                                <li><img src='img/clock.jpg' width={62} height={30} />Часы</li>
                                <li><img src='img/purse-small.jpg' width={62} height={30} />Кошельки</li>
                                <li><img src='img/money-box-small.jpg' width={60} height={30} />Копилки</li>
                                <li><img src='img/gloves-small.jpg' width={62} height={30} />Перчатки и варешки</li>
                                <li><img src='img/sert.jpg' width={62} height={30} />Сертификаты</li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
