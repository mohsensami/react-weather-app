import Header from '../Header';
import './style.css';

const Layout = (props: any) => {
    return (
        <>
            <div id="layout">
                <div>
                    <Header />
                </div>
                <div>{props.children}</div>
            </div>
        </>
    );
};

export default Layout;
