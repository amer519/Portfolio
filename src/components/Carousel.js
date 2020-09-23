import React from 'react';

import instagram from '../assets/images/instagram.png'
import linkedin from '../assets/images/linkedin.png'
import movieposter from '../assets/images/movieposter.jpg'

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Linkdin',
                    subTitle: 'Linkdin Account',
                    imgSrc: linkedin,
                    link: 'https://www.linkedin.com/in/amer-fahmy-5269a81a1/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Film Doctor',
                    subTitle: 'Movie Review App',
                    imgSrc: movieposter,
                    link: 'moviereview.com',
                    selected: false
                },
                {
                    id: 2,
                    title: "Instagram Clone",
                    subTitle: 'Instagram',
                    imgSrc: instagram,
                    link: 'getlinklater.com',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        })
    }

    makeitems = (items) => {
        return items.map(item => {
            return <Card item={item} onClick={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <p>Carousel!!!</p>
        );
    }

}


export default Carousel;