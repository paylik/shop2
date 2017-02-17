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
                    <p>Директор Ольга Николаевна +375-29-782-33-37 (мтс) </p>
                    <p>Наш магазин находится по адресу: г. Сморгонь, ул. Ленина д. 4</p>
                <Link src="https://api-maps.yandex.ru/services/constructor/1.0/js/?sid=KBhaELBmF3spV-HCmTpe8Qnrt2dnYEkm&amp;width=627&amp;height=620&amp;lang=ru_RU&amp;sourceType=constructor&amp;scroll=true"
                >
                </Link>    
                <p>Ориентир: Кафе "Вместе", цокольный этаж, вход с правой стороны</p>
                    <img src="img/kafe.jpg" width={1100} height={733} />
                    <img src="img/entrance.jpg" width={1100} height={1239} />
                </div>
        );
    }
}

