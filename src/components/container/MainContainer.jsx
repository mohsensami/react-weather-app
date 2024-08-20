import { Outlet } from 'react-router-dom';
import Header from '../layouts/Header';

export default function MainContainer() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
}
