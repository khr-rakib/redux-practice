import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            Dashboard
            <br />
            <Link to="/another">another private route</Link>
        </div>
    );
};

export default Dashboard;