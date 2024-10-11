import { useContext, useState } from "react";
import { UserContext } from "../UserContext";

const UpdateUser = () => {

    const { updateUser } = useContext(UserContext);
    const [name, setName] = useState("");


    return (
        <div>
            <div>
                <h1>
                    UpdateUser
                </h1>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <button onClick={() => updateUser(name)}>Update User</button>
            </div>
        </div>
    )
}
export default UpdateUser;