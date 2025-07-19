import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import About from '../components/About';
import NextMeeting from '../components/hoa/NextMeeting';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>First River Farms HOA - Welcome to Our Community</title>
        <meta name="description" content="Welcome to First River Farms, a beautiful community in Alexandria, VA. Discover our amenities, HOA information, and community events." />
      </Helmet>
      
      <main>
        <Hero />
        <About />
        <NextMeeting />
      </main>
    </>
  );
};

export default Home; 