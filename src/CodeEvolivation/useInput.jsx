import { useState } from 'react';

function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    const reset = () => {
        setValue(initialValue);
    };

    const bind = {
        value,
        onChange: (e) => setValue(e.target.value), // ✅ Fixed `onChange`
    };

    return [value, bind, reset]; // ✅ Returns correct values
}

export default useInput;
