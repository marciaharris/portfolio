import { useState } from "react";

export function Form () {
    const [form, setFormData] = useState({
        name:"",
        email: "",
        number: "",  
        comments:"",      
    })
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
        <>
            <form>
            <input
            placeholder="Full Name"
            value={form.name}
            type="text"
            name="name"
            onChange={handleChange}
            />
            <input
            placeholder="Email"
            value={form.email}
            type="email"
            name="email"
            onChange={handleChange}
            />
            <input
            placeholder="Cell Number"
            value={form.number}
            type="string"
            name="number"
            onChange={handleChange}
            />
            <textarea 
                value={form.comments}
                placeholder="Please explain your interest..."
                onChange={handleChange}
                name="comments"
            />
            <button onClick={handleSubmit}>Submit</button>
           </form>
        </>
    )
}