import { useState } from 'react';

export default function ContactForm() {

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const contactHandler = (e) => {
    e.preventDefault();
    //implement submit logic here and then after submitting clear the input fields and set the loading to false

    //submitting the form first
    if (name && email && msg) {
      setLoading(true);
      const credentials = {
        name,
        email,
        subject: "Mail from Zohaib's portfolio",
        message: msg,
      };
    }

    setName('');
    setEmail('');
    setMsg('');
    setLoading(false);
  };

  return (
    <form
      data-aos="fade"
      className="contact__form"
      noValidate
      onSubmit={contactHandler}
    >
      <h2 className="contact__form--title heading--secondary">Contact me</h2>
      <input
        className="contact__form--input form--input form--input--text"
        type="text"
        placeholder="First name"
        required
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="contact__form--input form--input form--input--text"
        type="email"
        required
        placeholder="Email address"
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        className="contact__form--textarea form--input form--input--textarea"
        required
        rows="6"
        placeholder="Message"
        onChange={(e) => setMsg(e.target.value)}
      ></textarea>
      {
        !loading ?
          <button
            className="contact__form--btn form--btn"
            type="submit"
          >
            Send
          </button> :
          <button
            disabled
            className="contact__form--btn form--btn"
            type="submit"
          >
            <div className="loader"></div>
          </button>
      }
    </form>
  );
}
