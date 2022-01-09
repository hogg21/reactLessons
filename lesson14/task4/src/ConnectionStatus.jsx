import React, { useEffect, useState } from "react";

const Status = () => {
    const [status, setStatus] = useState('online');

    const statusChange = e => {
        setStatus(e.type)
    }
    useEffect(() => {
        window.addEventListener('online', statusChange)
        window.addEventListener('offline', statusChange)
        return () => {
            window.removeEventListener('online', statusChange)
            window.removeEventListener('offline', statusChange)
        }
    }, [])
    const statusClass = status === 'online' ? '' : 'status_offline'
    return (
        <div className={`status ${statusClass}`}>{status}</div>
    )
}
export default Status;