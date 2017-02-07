
import React from 'react';

export default class Footer extends React.Component {

    static path = '/';

    render () {
        return (
            <div>
                <footer>
                    <p>Весь товар, представленный на нашем сайте вы можете преобрести в нашем магазине, который распологается по адресу г. Сморгонь, ул. Ленина 4, цокольный этаж.</p>
                    <p>© 2017 <a href="paylik.myjino.ru/shop">shop</a></p>
                </footer>
            </div>
        );
    }
}
