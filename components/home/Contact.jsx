// Logina26e94001@smtp-brevo.com
// Passwordt9haws30xdOYqTg8
"use client";
import React, { useState } from "react";
import styles from "@/css/components/home/Contact.module.css";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [coName, setCoName] = useState("");
    const [contact, setContact] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const [errors, setErrors] = useState({});

    const handlePhoneChange = (e) => {
        const value = e.target.value;
        const numericValue = value.replace(/\D/g, "");

        if (numericValue.length <= 10) {
            setPhone(numericValue);
        }
    };

    const isEmpty = (value) => !value.trim();

    const validate = () => {
        const newErrors = {};

        if (isEmpty(name)) newErrors.name = "Name is required";

        if (isEmpty(email)) {
            newErrors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            newErrors.email = "Invalid email";
        }

        if (isEmpty(phone)) {
            newErrors.phone = "Phone is required";
        } else if (phone.length !== 10) {
            newErrors.phone = "Enter 10 digit phone";
        }

        if (isEmpty(coName)) newErrors.coName = "Company name is required";
        if (isEmpty(contact)) newErrors.contact = "Contact time is required";
        if (isEmpty(subject)) newErrors.subject = "Subject is required";
        if (isEmpty(message)) newErrors.message = "Message is required";

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        console.log({ name, email, phone, coName, contact, subject, message });
    };

    return (
        <section id='contact' className={styles.contact}>
            <h1 className={styles.head}>
                Let us Reach your <span className={styles.color}>Brand</span>!
            </h1>
            <p className={styles.subhead}>Fill it! Let us reach you.</p>

            <form onSubmit={handleSubmit} className={styles.contactForm}>

                <div className={styles.inputRow}>
                    <div className={styles.inputBox}>
                        <label htmlFor="name">Name: </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Rakesh Lal"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <p className={styles.errorText}>{errors.name || ""}</p>
                    </div>

                    <div className={styles.inputBox}>
                        <label htmlFor="email">Email: </label>
                        <input
                            type="text"
                            id="email"
                            placeholder="rakeshlal12@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <p className={styles.errorText}>{errors.email || ""}</p>
                    </div>
                </div>

                <div className={styles.inputRow}>
                    <div className={styles.inputBox}>
                        <label htmlFor="phone">Phone: </label>
                        <input
                            type="text"
                            id="phone"
                            placeholder="9909xxxxxx"
                            value={phone}
                            onChange={handlePhoneChange}
                        />
                        <p className={styles.errorText}>{errors.phone || ""}</p>
                    </div>

                    <div className={styles.inputBox}>
                        <label htmlFor="coName">Co. Name: </label>
                        <input
                            type="text"
                            id="coName"
                            placeholder="The Jewel Stop"
                            value={coName}
                            onChange={(e) => setCoName(e.target.value)}
                        />
                        <p className={styles.errorText}>{errors.coName || ""}</p>
                    </div>
                </div>

                <div className={styles.inputRow}>
                    <div className={styles.inputBox}>
                        <label htmlFor="cont">Time to Contact: </label>
                        <input
                            type="text"
                            id="cont"
                            placeholder="9:03 AM"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                        />
                        <p className={styles.errorText}>{errors.contact || ""}</p>
                    </div>

                    <div className={styles.inputBox}>
                        <label htmlFor="subject">Subject: </label>
                        <input
                            type="text"
                            id="subject"
                            placeholder="Branding for the business"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                        <p className={styles.errorText}>{errors.subject || ""}</p>
                    </div>
                </div>

                <div className={styles.inputCont}>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        rows={7}
                        placeholder="I wanna grow my Brand and make it international"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <p className={styles.errorText}>{errors.message || ""}</p>
                </div>

                <button type="submit" className={styles.submit}>Let's Talk</button>
            </form>
        </section>
    );
};

export default Contact;