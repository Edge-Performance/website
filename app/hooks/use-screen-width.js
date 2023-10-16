import { useState, useEffect } from "react";

function useScreenWidth() {
    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        // Check if window is defined (client-side)
        if (typeof window !== "undefined") {
            // Initialize state to the current window width
            setScreenWidth(window.innerWidth);

            // Function to update the screenWidth state when the window is resized
            const handleResize = () => {
                setScreenWidth(window.innerWidth);
            };

            // Add an event listener for the window resize event
            window.addEventListener("resize", handleResize);

            // Remove the event listener when the component unmounts
            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }
    }, []);

    return screenWidth;
}

export default useScreenWidth;

