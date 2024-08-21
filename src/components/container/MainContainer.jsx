import { Outlet } from 'react-router-dom';
import Header from '../layouts/Header';

export default function MainContainer() {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <Outlet />
        </div>
    );
}
