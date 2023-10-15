import { useState, useEffect } from "react";

function useScreenWidth() {
    // Initialize state to the current window width
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    // Function to update the screenWidth state when the window is resized
    const handleResize = () => {
        setScreenWidth(window.innerWidth);
    };

    // Add an event listener for the window resize event
    useEffect(() => {
        window.addEventListener("resize", handleResize);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return screenWidth;
}

export default useScreenWidth;
