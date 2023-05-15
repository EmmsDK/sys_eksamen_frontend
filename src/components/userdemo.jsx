import React, {useState} from 'react';

function UserPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleBioChange = (event) => {
        setBio(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Name: ${name}, Email: ${email}, Bio: ${bio}`);
    };

    return (
        <div>
            <h1>User Page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={handleNameChange}/>
                </label>
                <label>
                    Email:
                    <input type="email" value={email} onChange={handleEmailChange}/>
                </label>
                <label>
                    Bio:
                    <textarea value={bio} onChange={handleBioChange}/>
                </label>
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default UserPage;