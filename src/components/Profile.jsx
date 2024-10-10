import { useState } from "react";

const Profile = () => {
    const [profiles, setProfiles] = useState([]);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleAgeChange = (event) => {
        setAge(event.target.value);
    }

    const submitForm = (event) => {
        event.preventDefault();
        if (name.trim() && age.trim()) {
            setProfiles([...profiles, { name: name, age: age }]);
            setName("");
            setAge("");
        }
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <input type="text"
                    onChange={handleNameChange}
                    value={name}
                    placeholder="Name"
                />
                <input type="text"
                    onChange={handleAgeChange}
                    value={age}
                    placeholder="Age"
                />
                <button type="submit">
                    Save Profile
                </button>
            </form>
            <div>
                <ul>
                    {
                        profiles.map((profile) =>
                            <div key={Math.random}>
                                <h1>Profile</h1>
                                <li>
                                    <h1>{profile.name}</h1>
                                    <h1>{profile.age}</h1>
                                </li>
                            </div>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}
export default Profile;