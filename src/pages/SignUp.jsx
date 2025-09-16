import LightRays from "../../LightRays";

const SignUp = () => {
    return (
        <div style={{ width: "100%", height: "600px", position: "relative", backgroundColor: "black" }}>
            <LightRays
                color="#ffffff"   // white light
                speed={0.6}
                direction="forward"
                scale={1.1}
                opacity={0.8}
                mouseInteractive={true}
            />
        </div>
        
    );
};

export default SignUp;
