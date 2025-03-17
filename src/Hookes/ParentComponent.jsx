import React, { useCallback, useState } from 'react'
import Count from './Count'
import Button from './Button'
import Tilte from './Tilte'

function ParentComponent() {
    const [age ,setage] = useState(20)
    const [salary , setsalary] = useState(50000)

    const handleAge = useCallback(() => {
        setage(age + 1)
    },[age])

    const handleSalary = useCallback(() => {
        setsalary(salary + 1000)
    },[salary])
  return (
    <div>
        <Tilte/>
        <Count value={age} />
        <Button onClick={handleAge} text={'age'}>Add Age</Button>
        <Count label="Salary" value={salary} />
        <Button onClick={handleSalary}text={'salary'}>Add Salary</Button>
    </div>
  )
}

export default ParentComponent