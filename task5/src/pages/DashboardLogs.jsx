import { useState, useEffect } from "react";
import { getLogs } from "../api/api";
import { LogItem } from "../components/LogItem";

export const DashboardLogs = () => {
    const [logs, setLogs] = useState(null);

    useEffect(() => {
        const placeHolder = async () => {
            try {
                const temp = await getLogs();
                setLogs(temp);
            } catch (error) {
                console.log(error);
            }
        };
        placeHolder();
    }, []);

    return (
        <div>
            {logs === null ? (
                <p>Loading</p>
            ) : logs.length === 0 ? (
                <p>No tasks available today.</p>
            ) : (
                logs
                    .sort((a, b) => a.id - b.id)
                    .map((reqInfo) => (
                        <LogItem
                            LogObj={reqInfo}
                            key={reqInfo.id}
                        />
                    ))
            )}
        </div>
    );
};
