import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AdSection from '../AdSection/AdSection';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Review from '../Review/Review';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
             <Navigation></Navigation>
             <Banner></Banner>
             <Services></Services>
             <Review></Review>
             <AdSection/>
             <Contact></Contact>
             <Footer></Footer>
        </div>
    );
};

export default Home;