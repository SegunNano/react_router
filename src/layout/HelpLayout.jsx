import { Outlet, NavLink } from "react-router-dom";

const HelpLayout = () => {
    return (
        <div className="help-layout">
            <h2>Website Help</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis rem possimus ipsam nulla laudantium! Quia!</p>

            <nav>
                <NavLink to='faq'>View theFAQ</NavLink>
                <NavLink to='contact'>Contact Us</NavLink>
            </nav>

            <Outlet />
        </div>
    );
};

export default HelpLayout;
