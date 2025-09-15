import { useState } from "react";
import LiquidEther from "../../LiquidEther";

const SignUp = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // 🎨 Theme Colors
    const lightTheme = {
        background: "#F3F4F6",
        text: "#1F2937",
        cardBg: "#FFFFFF",
        primary: "#3B82F6",
        secondary: "#8B5CF6",
        accent: "#EC4899",
    };

    const darkTheme = {
        background: "#111827",
        text: "#F9FAFB",
        cardBg: "#1F2937",
        primary: "#4F46E5",
        secondary: "#06B6D4",
        accent: "#10B981",
    };

    const theme = isDarkMode ? darkTheme : lightTheme;

    return (
        <div
            style={{
                width: "100%",
                height: "100vh",
                position: "relative",
                overflow: "hidden",
                backgroundColor: theme.background,
            }}
        >
            {/* Background Layer */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 0,
                }}
            >
                <LiquidEther
                    colors={[
                        theme.primary,
                        theme.secondary,
                        theme.accent,
                        theme.background,
                    ]}
                    mouseForce={20}
                    cursorSize={100}
                    isViscous={false}
                    viscous={30}
                    iterationsViscous={32}
                    iterationsPoisson={32}
                    resolution={0.5}
                    isBounce={false}
                    autoDemo={false}
                    takeoverDuration={0.25}
                    autoResumeDelay={3000}
                    autoRampDuration={0.6}
                />
            </div>

            {/* Content Layer */}
            <div
                style={{
                    position: "relative",
                    maxWidth: "400px",
                    margin: "0 auto",
                    marginTop: "5%",
                    backgroundColor: theme.cardBg,
                    padding: "2rem",
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                    zIndex: 1,
                }}
            >
                <h1
                    style={{
                        color: theme.primary,
                        marginBottom: "1.5rem",
                        textAlign: "center",
                    }}
                >
                    Create Account
                </h1>
                <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <input
                        type="text"
                        placeholder="Full Name"
                        style={{
                            padding: "0.75rem",
                            border: "1px solid #D1D5DB",
                            borderRadius: "8px",
                            outline: "none",
                            backgroundColor: theme.cardBg,
                            color: theme.text,
                        }}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        style={{
                            padding: "0.75rem",
                            border: "1px solid #D1D5DB",
                            borderRadius: "8px",
                            outline: "none",
                            backgroundColor: theme.cardBg,
                            color: theme.text,
                        }}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        style={{
                            padding: "0.75rem",
                            border: "1px solid #D1D5DB",
                            borderRadius: "8px",
                            outline: "none",
                            backgroundColor: theme.cardBg,
                            color: theme.text,
                        }}
                    />
                    <button
                        type="submit"
                        style={{
                            backgroundColor: theme.secondary,
                            color: "white",
                            padding: "0.75rem",
                            border: "none",
                            borderRadius: "8px",
                            cursor: "pointer",
                            fontWeight: "bold",
                            transition: "0.3s",
                        }}
                        onMouseOver={(e) =>
                            (e.currentTarget.style.backgroundColor = theme.primary)
                        }
                        onMouseOut={(e) =>
                            (e.currentTarget.style.backgroundColor = theme.secondary)
                        }
                    >
                        Sign Up
                    </button>
                </form>
                <p
                    style={{
                        marginTop: "1rem",
                        textAlign: "center",
                        color: theme.text,
                    }}
                >
                    Already have an account?{" "}
                    <a href="/login" style={{ color: theme.accent, fontWeight: "bold" }}>
                        Log in
                    </a>
                </p>

                {/* Toggle Dark/Light Mode */}
                <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        style={{
                            padding: "0.5rem 1rem",
                            borderRadius: "8px",
                            border: "none",
                            backgroundColor: theme.primary,
                            color: "white",
                            cursor: "pointer",
                            fontWeight: "bold",
                        }}
                    >
                        Switch to {isDarkMode ? "Light" : "Dark"} Mode
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
