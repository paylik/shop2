import React from 'react';
import { Link } from 'react-router';


export default class ContactPage extends React.Component {

    static path = '/contact';

    render () {
        return (
            <div className='in'>
                <h2>ТОРГОВЫЙ ОБЪЕКТ 'ЖЕНАВИ' </h2>
                    <h3>РЕЖИМ РАБОТЫ: <br />
                        пн-пт 10<sup>00</sup>-20<sup>00</sup>, сб-вс 10<sup>00</sup>-19<sup>00</sup>, перерыв 14<sup>00</sup>-15<sup>00</sup></h3>
                    <p>Частноу торговое унитарное предприятие "Ритакар"</p>
                    <p>УНП 591804844, г. Сморгонь, ул. Ленина д. 4</p>
                    <p>р/с 3012164648018 в дополнительном офисе №404 г.Сморгонь ОАО «БПС-Сбербанк»</p>
                    <p>Директор Ольга Николаевна +375-29-782-33-37 (мтс) </p>
                    <p>Наш магазин находится по адресу: г. Сморгонь, ул. Ленина д. 4</p>

                <div>
                    <iframe width={425} height={350} frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="http://www.openstreetmap.org/export/embed.html?bbox=26.400870680809025%2C54.48021471265457%2C26.40269458293915%2C54.48155952127111&layer=mapnik" style={{border: '1px solid black'}} /><br /><small><a href="http://www.openstreetmap.org/#map=19/54.48089/26.40178&layers=N">Посмотреть более крупную карту</a></small>
                </div>

                <p>Ориентир: Кафе "Вместе", цокольный этаж, вход с правой стороны</p>
                    <img src="img/kafe.jpg" width={1100} height={733} />
                    <img src="img/entrance.jpg" width={1100} height={1239} />
                </div>
        );
    }
}

