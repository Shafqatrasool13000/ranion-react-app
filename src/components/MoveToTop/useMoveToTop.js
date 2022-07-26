import { useEffect } from 'react'

const useMoveToTop = () => {
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });

        }, 0);
    }, []);
}

export default useMoveToTop