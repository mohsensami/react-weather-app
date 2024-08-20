const Header = () => {
    return (
        <div className=" bg-black py-4 text-white items-center">
            <div className="container mx-auto flex justify-between">
                <div>Weather App</div>
                <div>
                    <nav>
                        <ul className="flex gap-2">
                            <li>Home</li>
                            <li>
                                <a href="#">Api</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;
