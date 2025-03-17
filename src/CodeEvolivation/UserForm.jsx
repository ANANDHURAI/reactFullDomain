import React from 'react';
import useInput from './useInput';

function UserForm() {
    const [firstName, firstNameBind, resetFirstName] = useInput(''); // ✅ Clean naming
    const [lastName, lastNameBind, resetLastName] = useInput('');

    const handleForm = (e) => {
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`);

        resetFirstName(); 
        resetLastName();
    };

    return (
        <div>
            <form onSubmit={handleForm}>
                <div>
                    <label>First Name</label>
                    <input type="text" {...firstNameBind} />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" {...lastNameBind} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default UserForm;
