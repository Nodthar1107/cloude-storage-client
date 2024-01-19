import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export function Redirect(props: { to: string }) {
    const navigate = useNavigate();

    useEffect(() => {
        console.log('redirecting');
        navigate(props.to, { replace: true });
    }, [])

    return <div>Переадресация...</div>;
}
