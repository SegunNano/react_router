const Contact = () => {
    return (
        <div className="contact">
            <h1></h1>
            <form action="">
                <label>
                    <span>Your Email</span>
                    <input type="email" name="email" required />
                </label>
                <label>
                    <span>Your Message</span>
                    <textarea name="message" required></textarea>
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Contact;
