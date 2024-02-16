import { useState } from "react";
import { useLocation } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { PiPaperPlaneTiltBold } from "react-icons/pi";

const Contact = () => {
    const location = useLocation();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact: "",
        subject: location?.state?.subject || "",
        message: "",
        access_key: import.meta.env.VITE_FORM_SUBMIT_KEY
    });

    const [loading, setLoading] = useState<boolean>(false);

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(formData)
            });
            const json = await response.json();
            if (json.success) {
                alert("Thank You for showing interest. We will reach out to you soon!");
                setFormData(prev => {
                    return { ...prev, message: "" };
                });
            }
            else {
                alert("Failed to send message. Some error occured :(");
            }
        } catch (err) {
            alert("Failed to send message. Some error occured :(");
        } finally {
            setLoading(false);
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        });
    }

    return (
        <section className="py-32">
            <div className="mb-12 text-2xl font-semibold text-center md:text-3xl">Contact Us</div>
            <div className="flex justify-center">
                <form className="w-full max-w-2xl px-8" onSubmit={handleFormSubmit}>
                    <div className="contact-form-control">
                        <input type="text" name="name" id="name" className="contact-input peer" value={formData.name} onChange={handleInputChange} placeholder=" " required />
                        <label htmlFor="name" className="contact-label">Name</label>
                    </div>
                    <div className="contact-form-control">
                        <input type="email" name="email" id="email" className="contact-input peer" value={formData.email} onChange={handleInputChange} placeholder=" " required />
                        <label htmlFor="email" className="contact-label">Email</label>
                    </div>
                    <div className="contact-form-control">
                        <input type="tel" name="contact" id="contact" className="contact-input peer" value={formData.contact} onChange={handleInputChange} placeholder=" " />
                        <label htmlFor="contact" className="contact-label">Contact</label>
                    </div>
                    <div className="contact-form-control">
                        <input type="text" name="subject" id="subject" className="contact-input peer" value={formData.subject} onChange={handleInputChange} placeholder=" " required />
                        <label htmlFor="subject" className="contact-label">Subject</label>
                    </div>
                    <div className="contact-form-control !h-36">
                        <textarea name="message" id="message" className="py-4 resize-none contact-input peer" value={formData.message} onChange={handleInputChange} placeholder=" " />
                        <label htmlFor="message" className="contact-label">Message</label>
                    </div>
                    <button className="flex items-center justify-center px-8 py-4 font-medium text-white bg-black rounded-sm" type="submit" disabled={loading} aria-label="submit">
                        <span className="mr-3">Submit</span>
                        {loading ? <AiOutlineLoading3Quarters className="animate-spin" /> : <PiPaperPlaneTiltBold />}
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
