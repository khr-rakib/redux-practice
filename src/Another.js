import React from 'react';
import { useFirebase } from "react-redux-firebase";

const Another = () => {
    const firebase = useFirebase();
    return (
        <div>
            another router <br />

            <button onClick={() => firebase.logout()}>logout</button>
        </div>
    );
};

export default Another;