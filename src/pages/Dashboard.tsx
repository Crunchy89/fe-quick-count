import { useEffect } from "react";

const Dashboard = () => {
    useEffect(()=>{
        console.log("dashboard i loaded")
    },[])
    return (
        <div>
            dashboard
        </div>
    );
};

export default Dashboard;