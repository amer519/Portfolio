import React from 'react';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Linkdin',
                    subTitle: 'Linkdin Account',
                    imgSrc: 'linkdin',
                    link: 'https://www.linkedin.com/in/amer-fahmy-5269a81a1/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Film Doctor',
                    subTitle: 'Movie Review App',
                    imgSrc: 'filmdoctor',
                    link: 'moviereview.com',
                    selected: false
                },
                {
                    id: 2,
                    title: "Instagram Clone",
                    subTitle: 'Instagram',
                    imgSrc: 'instagram',
                    link: 'getlinklater.com',
                    selected: false
                },
            ]
        }
    }

    render() {
        return(
            <p>Carousel!!!</p>
        );
    }

}


export default Carousel;