import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h2>Page Not Found</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni cum aliquam ad modi provident quod ratione inventore deleniti, praesentium amet molestias totam facere eligendi, doloribus tempore nesciunt atque, voluptates maiores?</p>
            <p>Go back to the <Link to='/'>Home</Link> page.</p>
        </div>
    );
};

export default NotFound;
