import { useLoaderData, useParams } from "react-router-dom";

// export const CareerDetailsLoader = async ({ params }) => {
//     const { id } = params;
//     const res = await fetch('http://localhost:4000/careers/' + id);
//     return res.json();
// };


const CareerDetails = () => {
    const { id } = useParams();
    const career = useLoaderData();
    return (
        <div className="career-details">
            <h2>Career Dateils for {career.title}</h2>
            <p>Starting Salary: {career.salary}</p>
            <p>Location: {career.location}</p>
            <div className="details">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis id laboriosam ratione dolorem inventore corrupti quaerat cum corporis! Ex aperiam, assumenda possimus vitae repudiandae doloremque mollitia? Corporis eveniet eius inventore iure velit, debitis, impedit hic expedita ex quis autem dolor quidem temporibus quasi accusantium saepe molestiae suscipit totam nam nihil!</p>
            </div>
        </div>
    );
};

export default CareerDetails;
