import { useEffect, useRef, useState } from "react";

export function useElementSize() {
    const [isExceedBottom, setIsExceedBottom] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new ResizeObserver((entries) => {

            const elementBottom = entries[0].target.getBoundingClientRect().bottom;
            console.log('element:', entries[0].target.getBoundingClientRect());

            setIsExceedBottom(elementBottom > window.innerHeight)
        });

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [elementRef]);

    return { ref: elementRef, isExceedBottom };
}

