import Header from '../layouts/Header';

export default function MainContainer(props) {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="bg-primary-600 flex-1">
                <div>{props.children}</div>
            </div>
            {/* <Footer /> */}
        </div>
    );
}
