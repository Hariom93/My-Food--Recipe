
import Navbar from './Navbar';
import FoodItem from './FoodItem';
import CategoryMenu from './CategoryMenu';
import Footer from './Footer';

const Home = () => {

    return (
        <div className='w-fit lg:w-[99vw]'>
            <Navbar />
            <CategoryMenu />
            <FoodItem />
            <Footer />
        </div>
    )
}
export default Home