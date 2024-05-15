import { Form, useActionData } from "react-router-dom";

const Contact = () => {

    const data = useActionData();
    return (
        <div className="contact">
            <h1></h1>
            <Form method="post" action="/help/contact">
                {data && data.error && <p>{data.error}</p>}
                <label>
                    <span>Your Email</span>
                    <input type="email" name="email" required />
                </label>
                <label>
                    <span>Your Message</span>
                    <textarea name="message" required></textarea>
                </label>
                <button>Submit</button>
            </Form>
        </div>
    );
};

export default Contact;
