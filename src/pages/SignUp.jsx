import LightRays from "../../LightRays";

const SignUp = () => {
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
                fontFamily: "'Poppins', sans-serif", // 👈 Apply Poppins globally
            }}
        >
            {/* Background Light Rays */}
            <LightRays
                color="#ffffff"
                speed={0.6}
                direction="forward"
                scale={1.1}
                opacity={0.8}
                mouseInteractive={true}
            />

            {/* Glassmorphism Sign Up Form */}
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
                    fontFamily: "'Poppins', sans-serif",
                }}
            >
                <h2
                    className="text-3xl"
                    style={{
                        textAlign: "center",
                        marginBottom: "1.5rem",
                        fontWeight: "700",
                        letterSpacing: "1px",
                    }}
                >
                    Sign Up
                </h2>

                <form
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.8rem",
                    }}
                >
                    <label style={{ fontWeight: "500", fontSize: "0.9rem" }}>
                        Enter your Email
                    </label>
                    <input type="email" placeholder="Email" style={inputStyle} />

                    <label style={{ fontWeight: "500", fontSize: "0.9rem" }}>
                        Create a password
                    </label>
                    <input
                        type="password"
                        placeholder="Password"
                        style={inputStyle}
                    />

                    <button
                        type="submit"
                        style={buttonStyle}
                        onMouseOver={(e) =>
                            (e.currentTarget.style.background = "#ddd")
                        }
                        onMouseOut={(e) =>
                            (e.currentTarget.style.background = "white")
                        }
                    >
                        Create Account
                    </button>
                </form>

                <div
                    style={{
                        textAlign: "center",
                        margin: "1rem 0",
                        color: "white",
                        fontWeight: "500",
                    }}
                >
                    OR
                </div>

                {/* Social Sign Up */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.7rem",
                    }}
                >
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

                {/* Already have an account */}
                <div
                    style={{
                        textAlign: "center",
                        marginTop: "1.2rem",
                        color: "white",
                        fontSize: "0.9rem",
                    }}
                >
                    Already have an account?{" "}
                    <a
                        href="/login"
                        style={{
                            color: "#ffffff",
                            fontWeight: "600",
                            textDecoration: "underline",
                            cursor: "pointer",
                        }}
                    >
                        Log in
                    </a>
                </div>
            </div>
        </div>
    );
};

// Reusable styles
const inputStyle = {
    padding: "0.8rem",
    borderRadius: "10px",
    border: "none",
    outline: "none",
    background: "rgba(255, 255, 255, 0.2)",
    color: "white",
    fontSize: "1rem",
    fontFamily: "'Poppins', sans-serif",
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

// Google button
const googleButton = {
    ...buttonStyle,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "white",
    border: "1px solid #ddd",
};

// Apple button
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
