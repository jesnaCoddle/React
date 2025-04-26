import './HomeModule.css';

function HomePage() {
    return (
        <div className="home-container">
            <header>
                <div className='main'>
                    <h1 className="brand">
                        <span className="brand-yellow">Build</span>
                        <span className="brand-blue">Rent</span>
                    </h1>
                    <nav className='navbar'>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Rent</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                    <div className='logout'>
                        <button type="button">Log Out</button>
                    </div>
                </div>
            </header>

            <div className="content">
                <p>
                    Rent top-grade machinery and equipment for your construction and industrial needs.
                    Reliable, affordable, and easy-to-book.
                </p>
                <button type="button">Know More</button>
            </div>

            <footer>
                <p>
                    © 2025 BuildRent. All rights reserved. We provide premium construction and industrial machinery rentals across the region.
                </p>
            </footer>
        </div>
    );
}

export default HomePage;
