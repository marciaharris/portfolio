import { Form } from "./Form";

export default function Contact (props){
    const phone = props.phone;
    const email = props.email;
    const linkedIn = props.linkedIn;
//thoughts have contact me page host a game and at the bottom people can leave feedback for the game
    return (
        <div className="text-center">
           <h2 className="text-xl w-full flex flex-col items-center my-10" >Contact Me</h2>

            <p className="text-primary">Get in touch with me for any queries or feedback.</p>
            <p className="text-primary">phone number: {phone}</p>
            <p className="text-primary">{email}</p>
            <a className="link text-accent" href={linkedIn} >Here is my LinkedIn</a>
            <Form/>
        </div>
    )
}