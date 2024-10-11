import { useContext } from "react";
import { UserContext } from "../UserContext";
import UpdateUser from "./UpdateUser";


const UserProfile = () => {
    const { user } = useContext(UserContext);

    return (
        <div>
            <h1>Welcome, {user.name}</h1>
            <UpdateUser />
        </div>
    )
}

export default UserProfile;