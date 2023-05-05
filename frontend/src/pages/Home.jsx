//TODO home!
import MainCarousel from '../components/MainCarousel';
import ShoppingList from '../components/ShoppingList';
import Subscribe from '../components/Subscribe';

function HomePage(){
    return(<div className='home'>
        <MainCarousel />
        <ShoppingList />
        <Subscribe />
        </div>
    );
}

export default HomePage;