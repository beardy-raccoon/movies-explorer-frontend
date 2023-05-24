import React from "react";
import './GoogleAuthLink.css';
import { BASE_URL } from "../../utils/consts";

export default function ButtonGoogleAuth() {
  const handleGoogleAuth = () => {
    localStorage.setItem('authorized', true)
  }
  return (
    <a href={`${BASE_URL}/oauth/google`} className="link google-auth-link" onClick={handleGoogleAuth}>
      <p className="google-auth-link__text">Continue with Google</p>
    </a>
  );
}

