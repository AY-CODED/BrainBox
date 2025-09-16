import { useState } from "react";
import LightRays from "../../LightRays"; // Background animation
import { Mail, Lock, UserPlus, Eye, EyeOff } from "lucide-react"; // Lucide icons

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  // Handle form submit (connect to backend later)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted"); 
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* 🌌 Background light rays */}
      <LightRays
        color="#ffffff"
        speed={0.6}
        direction="forward"
        scale={1.1}
        opacity={0.8}
        mouseInteractive
      />

      {/* 🔲 Glassmorphism Sign Up Card */}
      <div
        style={{
          position: "absolute",
          zIndex: 10,
          width: "100%",
          maxWidth: "420px",
          padding: "2rem",
          borderRadius: "20px",
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(15px) saturate(150%)",
          WebkitBackdropFilter: "blur(15px) saturate(150%)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          color: "white",
          boxShadow: "0 8px 32px rgba(255, 255, 255, 0.1)",
        }}
      >
        {/* 📝 Title */}
        <h2
          style={{
            textAlign: "center",
            marginBottom: "1.5rem",
            fontWeight: "700",
            fontSize: "1.8rem",
            letterSpacing: "0.5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          <UserPlus size={28} /> Sign Up
        </h2>

        {/* 📩 Sign Up Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {/* Email field */}
          <label style={labelStyle}>Enter your Email</label>
          <div style={inputWrapper}>
            <Mail size={18} style={iconStyle} />
            <input
              name="email"
              type="email"
              placeholder="Email"
              style={inputStyle}
              required
            />
          </div>

          {/* Password field with toggle visibility */}
          <label style={labelStyle}>Create a Password</label>
          <div style={{ ...inputWrapper, justifyContent: "space-between" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                flex: 1,
              }}
            >
              <Lock size={18} style={iconStyle} />
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                style={inputStyle}
                required
              />
            </div>

            {/* 👁 Eye toggle button */}
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              style={toggleButton}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Submit button */}
          <button type="submit" style={buttonStyle}>
            Create Account
          </button>
        </form>

        {/* Divider */}
        <div style={divider}>OR</div>

        {/* 🌐 Social Sign Up */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
          <button style={googleButton}>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
              alt="Google"
              style={{ width: "20px", marginRight: "10px" }}
            />
            Sign up with Google
          </button>

          <button style={appleButton}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="Apple"
              style={{ width: "20px", marginRight: "10px" }}
            />
            Sign up with Apple
          </button>
        </div>

        {/* 🔑 Already have account */}
        <div
          style={{
            textAlign: "center",
            marginTop: "1.2rem",
            fontSize: "0.9rem",
          }}
        >
          Already have an account?{" "}
          <a href="/login" style={linkStyle}>
            Log in
          </a>
        </div>
      </div>
    </div>
  );
};

/* ---------- 🔹 Styles (Reusable) ---------- */
const labelStyle = {
  fontWeight: "500",
  fontSize: "0.9rem",
};

const inputWrapper = {
  display: "flex",
  alignItems: "center",
  background: "rgba(255, 255, 255, 0.2)",
  borderRadius: "10px",
  padding: "0.6rem 0.8rem",
  gap: "0.5rem",
};

const inputStyle = {
  flex: 1,
  border: "none",
  outline: "none",
  background: "transparent",
  color: "white",
  fontSize: "1rem",
  fontFamily: "'Poppins', sans-serif",
};

const iconStyle = {
  color: "white",
  opacity: 0.9,
};

const toggleButton = {
  background: "transparent",
  border: "none",
  cursor: "pointer",
  padding: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  opacity: 0.9,
};

const buttonStyle = {
  padding: "0.9rem",
  borderRadius: "10px",
  border: "none",
  background: "white",
  color: "black",
  fontWeight: "600",
  fontSize: "1rem",
  cursor: "pointer",
  transition: "0.3s",
  width: "100%",
  fontFamily: "'Poppins', sans-serif",
  letterSpacing: "0.5px",
};

const divider = {
  textAlign: "center",
  margin: "1rem 0",
  color: "white",
  fontWeight: "500",
};

const linkStyle = {
  color: "#ffffff",
  fontWeight: "600",
  textDecoration: "underline",
  cursor: "pointer",
};

const googleButton = {
  ...buttonStyle,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "white",
  border: "1px solid #ddd",
};

const appleButton = {
  ...buttonStyle,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "white",
  color: "black",
  border: "1px solid rgba(255,255,255,0.3)",
};

export default SignUp;
