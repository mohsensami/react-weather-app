import './style.css';

const Layout = (props: any) => {
    return (
        <div id="layout">
            <div>{props.children}</div>
        </div>
    );
};

export default Layout;
