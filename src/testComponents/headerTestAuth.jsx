import { useState } from "react";
import { useAuth } from "../hook/auth/useAuth";
import { ACCESS_TOKEN } from "../util/constants";
import toast from 'react-hot-toast';

export const HeaderTestAuth = () => {

    const { token } = useAuth();

    const [toastId, setToastId] = useState();

    return (
        <>
        <h4>
            <strong>ACCESS TOKEN:</strong> { localStorage.getItem(ACCESS_TOKEN) }
        </h4>
        <h5>
            <strong>TOAST ID:</strong> { toastId }
        </h5>
        <button onClick={() => setToastId(toast.loading("Iniciando sesión"))}>
            Abrir
        </button>
        <button onClick={() => toast.success("Se ha terminado", {
            id: toastId
        })}>
            Modificar
        </button>
        <button onClick={() => toast.dismiss(toastId)}>
            Cerrar
        </button>
        <button onClick={() => toast.remove()}>
            Cerrar todos
        </button>
        </>
    );
    
}