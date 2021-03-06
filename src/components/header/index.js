
import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {

    static path = '/';

    render () {
        return (
            <div>
                 <div className='logo'>
                    <div className='logo_logo'> <Link to='/products'><img src='img/logo-jenavi-smorgon-3.png' alt='logo' width={380} height={184} /></Link>
                    </div>
                    <div className='logo_time'>
                        <h2>ТОРГОВЫЙ ОБЪЕКТ 'ЖЕНАВИ' </h2>
                        <h3>РЕЖИМ РАБОТЫ: <br />
                            пн-пт 10<sup>00</sup>-20<sup>00</sup>, сб-вс 10<sup>00</sup>-19<sup>00</sup>, перерыв 14<sup>00</sup>-15<sup>00</sup></h3>
                        <p>Директор Ольга Николаевна +375-29-782-33-37 (мтс) </p>
                    </div>
                    <div className='logo_swarovsky'><a href='img/swarovski-sertificat.jpg'><img src='img/Swarovski-logo.jpg' width={184} height={184} alt='logo' /></a></div>
                </div>
                <h2 style={{color:"red"}}> В связи со сложной эпидемиологической ситуацией магазин работает в четверг, пятницу и субботу.
            </h2>
                <nav> 
                 <ul>
                     <Link to='/'><li>Главная</li></Link>
                     <Link to='/products'><li>Продукция</li></Link>
                     <Link to='/video'><li>Видео</li></Link>
                     <Link to='/shares'><li>Акции</li></Link>
                     <Link to='/certificate'><li>Подарочные <br /> сертификаты</li></Link>
                     <Link to='/guarantees'><li>Гарантии</li></Link>
                     <Link to='/contact'><li>О нас</li></Link>
                </ul>
                    <div className='hovered'>
                        <div className='prod'>
                            <ul>
                                <Link to='/jenavi'><li><img src='img/logo-jenavi.jpg' width={62} height={30} />Бижутерия 'JENAVI'</li></Link>
                                <Link to='/glass'><li><img src='img/bigGlass.jpg' width={62} height={30} />Солнцезащитные очки</li></Link>
                                <Link to='/toys'><li><img src='img/toys-small.jpg' width={62} height={30} />Мягкая игрушка</li></Link>
                                <Link to='/bow'><li><img src='img/bow.jpg' width={62} height={30} />Аксессуары для волос </li></Link>
                                <Link to='/jevely'><li><img src='img/jevely-small.jpg' width={62} height={30} />Китайская бижутерия</li></Link>
                                <Link to='/clock'><li><img src='img/clock.jpg' width={62} height={30} />Часы</li></Link>
                                <Link to='/purse'><li><img src='img/purse-small.jpg' width={62} height={30} />Кошельки</li></Link>
                                <Link to='/box'><li><img src='img/money-box-small.jpg' width={60} height={30} />Зонты</li></Link>
                                <Link to='/gloves'><li><img src='img/gloves-small.jpg' width={62} height={30} />Перчатки и варешки</li></Link>
                                <Link to='/certificate'><li><img src='img/sert.jpg' width={62} height={30} />Сертификаты</li></Link>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
