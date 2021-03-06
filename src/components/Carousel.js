import React from 'react';

import instagram from '../assets/images/instagram.png';
import linkedin from '../assets/images/linkedin.png';
import movieposter from '../assets/images/movieposter.jpg';
import Card from '../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Linkedin',
                    subTitle: 'Linkedin Account',
                    imgSrc: linkedin,
                    link: 'https://www.linkedin.com/in/amer-fahmy-5269a81a1/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Film Doctor',
                    subTitle: 'Movie Review App',
                    imgSrc: movieposter,
                    link: 'https://github.com/amer519/movie-review',
                    selected: false
                },
                {
                    id: 2,
                    title: "Instagram Clone",
                    subTitle: 'Instagram',
                    imgSrc: instagram,
                    link: 'https://instagram-clone-756a5.web.app/https:/instagram-clone-756a5.web.app/',
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

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className='justify-content-around'>
                    {this.makeItems(this.state.items)}

                </Row>
            </Container>
        );
    }

}


export default Carousel;