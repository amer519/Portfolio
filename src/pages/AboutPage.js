import React from 'react'

import Hero from '../components/Hero'
import Content from '../components/Content'

function AboutPage(props) {

    return (
        <div>
            <Hero title={props.title} />

            <Content>
                <p>Hello, my name is Amer. I'm a full stack engineer with experience in JavaScript, React, Redux, Ruby, Ruby on Rails, ActiveRecord, HTML, CSS with a background in computer science.</p>

                <p>I'm always trying my hardest to get better at the things i've learned as well as learn new things on the way!</p>

                <p>I'm pretty new to the coding world but I fell in love with it quickly.</p>

                <p>I'm fortunate to be a Flation School Alumni and in a short 4 months learned a handful of languages and frameworks.</p>

                <p>If you have any question or would like to contact me please dont hesitate and head over to my contact page!!</p>
            </Content>

        </div>
    );

}

export default AboutPage
