export default function Contact (props){
    const phone = props.phone;
    const email = props.email;
    const linkedIn = props.linkedIn;
    return (
        <div>
           <h2>Contact Us</h2>
            <p>Get in touch with me for any queries or feedback.</p>
            <p>Here is my business phone number: {phone}</p>
            <p>Here is my email: {email}</p>
            <p>Here is my LinkedIn: {linkedIn}</p>
        </div>
    )
}