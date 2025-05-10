import { Typography, Container } from "@mui/material";
import MultiAccordions from "../components/MultiAccordions";
import Log from "../components/Log";
import { useState } from "react";

export default function Dashboard() {
    const [logs, setLogs] = useState([]);
    function sendToLog(panel) {
        setLogs(panel);
    }

    return (
        <Container>
            <Typography variant="h4">Area Riservata</Typography>
            <MultiAccordions></MultiAccordions>
            {/* <MultiAccordions sendToDashboard={sendToLog}></MultiAccordions>
            <Log logs={logs}></Log> */}
        </Container>
    );
}
