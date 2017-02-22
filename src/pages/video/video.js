import React from 'react';

export default class VideoPage extends React.Component {

    static path = '/video';

    render () {
        return (
            <div className='video'>

                <iframe width={560} height={315} src="https://www.youtube.com/embed/c-UusSR_fzw" frameBorder={0} allowFullScreen />
                <iframe width={560} height={315} src="https://www.youtube.com/embed/2FrsHEA6wsQ" frameBorder={0} allowFullScreen />
                <iframe width={560} height={315} src="https://www.youtube.com/embed/xfNsRlfpEJA" frameBorder={0} allowFullScreen />
                <iframe width={560} height={315} src="https://www.youtube.com/embed/zqcxHNUPsA8" frameBorder={0} allowFullScreen />
                <iframe width={560} height={315} src="https://www.youtube.com/embed/GNcuxs0t6pU" frameBorder={0} allowFullScreen />
                <iframe width={560} height={315} src="https://www.youtube.com/embed/2ECYHveLyzk" frameBorder={0} allowFullScreen />
            </div>
        );
    }
}

