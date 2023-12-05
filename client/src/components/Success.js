import axios from "axios";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Success = () => {
    const { subscriptionName } = useParams();
    const role = {
        role: subscriptionName
    }
    const {user} = useContext(AuthContext)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.patch("/api/update-role", role, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${user.token}`
                    }   
                });
    
                console.log(response);
            } catch (error) {
                console.error('Error updating role:', error.response ? error.response.data : error.message)
            }
        };
    
        if (user) {
            fetchData()
        }
    }, [user])

    return(
        <div>
            <h1>Success Page</h1>
            <p>Role of the user: <b>{user.email}</b> updated to: <b>{subscriptionName}</b></p>
        </div>
    )
}

export default Success