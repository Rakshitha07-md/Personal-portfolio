import { useState } from "react";
import axios from "axios";

function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await axios.post(
                "http://localhost:5000/api/contact",
                {
                    name,
                    email,
                    message
                }
            );

            alert("Message sent!");

            setName("");
            setEmail("");
            setMessage("");

        } catch (error) {

            alert("Error sending message");

        }
    };

    return (

        <div className="page">

            <h1>Contact Me</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) =>
                        setName(e.target.value)
                    }
                />

                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                />

                <textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) =>
                        setMessage(e.target.value)
                    }
                />

                <button type="submit">
                    Send Message
                </button>

            </form>

        </div>
    );
}

export default Contact;