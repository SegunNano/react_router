import { Link, NavLink, Outlet } from 'react-router-dom';

const RootLayout = () => {
    return (
        <div className="root-layout">
            <header>
                <nav>
                    <h1>Router_Practice</h1>
                    {/* <Link to='/'>Home</Link> */}
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/help'>Help</NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default RootLayout;
