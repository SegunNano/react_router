import { redirect } from "react-router-dom";

export const careersLoader = async () => {
    const res = await fetch('http://localhost:4000/careers');


    if (!res.ok) {
        throw Error('Could not fetch Careers List');
    }


    return res.json();
};

export const CareerDetailsLoader = async ({ params }) => {
    const { id } = params;
    const res = await fetch('http://localhost:4000/careers/' + id);

    if (!res.ok) {
        throw Error('Could not find Career');
    }

    return res.json();
};


export const contactAction = async ({ request }) => {
    console.log(request);

    const data = await request.formData();

    const submission = {
        email: data.get('email'),
        message: data.get('message')
    };

    if (submission.message.length < 10) {
        return {
            error: ' Data must be more than 10 characters long',
            value: { ...submission }
        };
    }

    console.log(submission);

    return redirect('/');
};