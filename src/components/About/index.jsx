import React from 'react';
import Header from '../shared/Header';
import './styles.css';
import Walt from './walt.jpg'

const About = () => {
    return (
        <>
            {/* You need to use your shared header component... */}
            <Header title="A random fact about me"/>
            {/* You need a paragraph describing a fun fact about you */}
            <p>A fun fact about me is that my birthday is on Hallowe'en, a birthday I share with our dogs.</p>

            <p>Our doggos will be one year old on Hallowe'en. That I am talking about them in a blurb about me says much about how this year has been with rearing giant puppies.</p>

            <p>I say giant because they are a mix of two giant breed dogs- Great Dane and English Mastiff</p>

            <p>They are still growing but Marlie is 155lbs and Walter is 175lbs.</p>

            <p>They are both unreasonably excited by celery.</p>

            <p>
                <img src={require=Walt} alt="Walter's Big Dog Face" title="'Chu lookin' at?"/>
            </p>
        </>
    );
};

export default About;