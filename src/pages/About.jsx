import { useState } from "react";
import { Navigate } from "react-router-dom";

const About = () => {

    const [user, setUser] = useState('Rakjhdkjash');
    function handleLogout() {
        setUser('');
    };

    if (!user) {
        return <Navigate to='/' replace={true} />;
    }
    return (

        <div className="About">
            <h2>About Us</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eaque nihil placeat eligendi aliquid sapiente, quas non praesentium maiores impedit, iste odit ullam dignissimos doloribus error quasi asperiores iure accusamus natus laudantium, reiciendis delectus. Officiis necessitatibus nostrum repellat illo quo eum quisquam eos similique ipsam cumque dicta nulla, nihil alias sed beatae quam obcaecati temporibus aperiam id perspiciatis maiores. Nostrum consequatur consequuntur dolor animi corporis, doloribus veniam amet iure officia. Ratione rerum nemo quod animi tempore sint sit recusandae repellat esse accusantium
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eaque nihil placeat eligendi aliquid sapiente, quas non praesentium maiores impedit, iste odit ullam dignissimos doloribus error quasi asperiores iure accusamus natus laudantium, reiciendis delectus. Officiis necessitatibus nostrum repellat illo quo eum quisquam eos similique ipsam cumque dicta nulla, nihil alias sed beatae quam obcaecati temporibus aperiam id perspiciatis maiores. Nostrum consequatur consequuntur dolor animi corporis, doloribus veniam amet iure officia. Ratione rerum nemo quod animi tempore sint sit recusandae repellat esse accusantium
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eaque nihil placeat eligendi aliquid sapiente, quas non praesentium maiores impedit, iste odit ullam dignissimos doloribus error quasi asperiores iure accusamus natus laudantium, reiciendis delectus. Officiis necessitatibus nostrum repellat illo quo eum quisquam eos similique ipsam cumque dicta nulla, nihil alias sed beatae quam obcaecati temporibus aperiam id perspiciatis maiores. Nostrum consequatur consequuntur dolor animi corporis, doloribus veniam amet iure officia. Ratione rerum nemo quod animi tempore sint sit recusandae repellat esse accusantium
            </p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default About;
