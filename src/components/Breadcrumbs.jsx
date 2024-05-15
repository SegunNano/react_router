import { useLocation, Link } from "react-router-dom";

const Breadcrumbs = () => {
    const location = useLocation();



    let currLink = '';
    const crumbs = location.pathname.split('/')
        .filter(c => c !== '')
        .map(c => {

            currLink += `/${c}`;

            return (
                <div key={c} className="crumb">
                    <Link to={currLink}>{c}</Link>
                </div>
            );
        });

    return (
        <div className="breadcrumbs">
            {crumbs}
        </div>
    );
};

export default Breadcrumbs;
