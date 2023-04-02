import { RefObject, useEffect, useMemo, useState } from "react";

export const useIsInViewport = (ref: RefObject<any>) => {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const observer = useMemo(
        () =>
            new IntersectionObserver(([entry]) => {
                setIsIntersecting(entry.isIntersecting)
            },
            ),
        [ref.current],
    );

    useEffect(() => {
        const element = ref.current;
        if (!element) {
            return;
        }
        observer.observe(ref.current);
        return () => {
            observer.disconnect();
        };
    }, [ref, observer]);

    return isIntersecting;
}