import { useState } from "react";

function useOffcanvas() {
    const [offcanvas, setOffcanvas] = useState(null);

    const offcanvasHandler = () => {
        setOffcanvas((prev) => !prev);
    };

    return { offcanvas, offcanvasHandler, setOffcanvas };
}

export default useOffcanvas;
