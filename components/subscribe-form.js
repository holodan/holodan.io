import React, { useRef, useState } from "react";
import fetch from "isomorphic-unfetch";

export default function SubscribeForm() {
  const [message, setMessage] = useState(null);
  const inputEl = useRef(null);

  const subscribe = async (e) => {
    e.preventDefault();

    if (!inputEl.current.value) {
      return toast.info("You must enter a valid email.");
    }

    const response = await fetch(`${process.env.SITE_URL}/api/subscribe`, {
      body: JSON.stringify({
        data: {
          email_address: inputEl.current.value,
          status: "subscribed",
        },
      }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });

    console.log("response", response);

    if (response.ok) {
      // Success
      // toast.success("Welcome to the newsletter");
      setMessage("Welcome to the newsletter!");
    } else if (response.status === 400) {
      // Already subscribed
      // toast.info("You are already added to our newsletter.");
      setMessage("You are already added to the newsletter!");
    } else {
      // Error
      // toast.error("There was an issue adding you.");
      setMessage("There was an issue adding you.");
    }

    inputEl.current.value = "";
    return true;
  };

  return (
    <>
      <br />

      <hr />

      <p>Keep up with the journey!</p>

      <form noValidate onSubmit={subscribe}>
        <input
          id="email-input"
          name="email"
          placeholder="Your email"
          ref={inputEl}
          type="email"
        />

        <button>Sign Up</button>

        <br />

        <small>{message}</small>
      </form>
    </>
  );
}
