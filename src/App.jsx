import { createContext, useReducer, useState } from 'react'
import HookCounter from './components/HookCounter'
import HookInput from './components/HookInput'
import HookWithArray from './components/HookWithArray'
import HookEffectOne from './components/HookEffectOne'
import HookMouse from './components/HookMouse'
import MouseContainer from './components/MouseContainer'
import IntervelEffect from './components/IntervelEffect'
import FetchingData from './components/FetchingData'
import CustomContext from './components/CustomContext'
import CounterReducerOne from './components/CounterReducerOne'
import CounterReducerTwo from './components/CounterReducerTwo'
import DatafetchingOne from './components/DatafetchingOne'
import DatafetchingTwo from './components/DatafetchingTwo'
import ParentComponent from './Hookes/ParentComponent'
import CounterUseMemo from './Hookes/CounterUseMemo'
import InputComRef from './Hookes/InputComRef'
import HookTimer from './Hookes/HookTimer'
import ComponentB from './CodeEvolivation/ComponentB'
import ComopenetA from './CodeEvolivation/ComopenetA'
import UserForm from './CodeEvolivation/UserForm'
import UseState from './CodeEvolivation/UseState'
import { UseReducer } from './CodeEvolivation/UseReducer'
import IndepthHook from './CodeEvolivation/IndepthHook'
import GrantParent from './Family/GrantParent'
import NewBottleReducer from './Family/NewBottleReducer'


function App() {

  return (
    <>
      <div>
        {/* <DatafetchingOne/> */}
        {/* <DatafetchingTwo/> */}
        {/* <ParentComponent/> */}
        {/* <CounterUseMemo/> */}
        {/* <InputComRef/> */}
        {/* <HookTimer/> */}
        {/* <ComponentB/>
        <ComopenetA/> */}
        {/* <UserForm/> */}
        {/* <UseState/> */}
        {/* <UseReducer/> */}
        {/* <IndepthHook/> */}
        {/* <GrantParent/> */}
        <NewBottleReducer/>
        
      </div>
      
    </>
  )
}

export default App
