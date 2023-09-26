
import { Outlet } from 'react-router-dom';
import Navber from '../Navbar/Navber';

const MainLayout = () => {

    

    return (
        <div className='max-w-[1440px] mx-auto px-4'>
            
            <Navber></Navber>

            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;