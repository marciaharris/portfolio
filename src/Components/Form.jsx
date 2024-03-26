import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

export function Form () {
    const [form, setFormData] = useState({
        name:"",
        email: "",
        number: "",  
        comments:"",      
    })

    const emailForm = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_8bge4g5', 'template_e4fzd7i', form.current, {
          publicKey: '0i4ajxZzVDqD8fYxr',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };


    function handleChange(event){
        const {value,name} = event.target;
        setFormData(prevData =>({
            ...prevData,
            [name] : value,
        }))
    }
    function handleSubmit (event){
        event.preventDefault();
        console.log(form);
    }
    return (
        <div className="mt-10" >
            <form onSubmit={sendEmail} className="flex flex-row">
            <label className="input-form">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
            <input
             className="px-5"
            placeholder="Full Name"
            value={form.name}
            type="text"
            name="name"
            onChange={handleChange}
            />
            </label>
            <label className="input-form">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
            <input
            className="grow mx-5"
            placeholder="Email"
            value={form.email}
            type="email"
            name="email"
            onChange={handleChange}
            />
            </label>
            <label className="input-form">
            <input
            placeholder="Cell Number"
            value={form.number}
            type="string"
            name="number"
            onChange={handleChange}
            />
            </label>
            <label className="input-form">
            <input 
                value={form.comments}
                placeholder="Please explain your interest..."
                onChange={handleChange}
                name="comments"
            />
            </label>
            <button onSubmit={sendEmail} className="btn btn-neutral border-primary border-2">Submit</button>
           </form>
        </div>
    )
}
