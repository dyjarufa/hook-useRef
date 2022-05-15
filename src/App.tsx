import React, { FormEvent, useCallback, useEffect, useRef } from "react";
import Input from "./components/Input";

function App() {
  const nameInputRef = useRef<HTMLInputElement>(null);
  
  // record a component information without rendering it
  const dataRegister = useRef({ value: false }) // is not required to create a interface, typescript understand the type already

  // useEffect(() => {
  //   nameInputRef.current?.focus();
  // }, [])

  const handleSubmit = useCallback((e: FormEvent) => { // FormeEvent react reference
    e.preventDefault();
    // nameInputRef.current?.focus();
    console.log(nameInputRef.current?.value);
    console.log(dataRegister.current?.value);
  },[])

  const handleDataRegister = useCallback(() => {
    dataRegister.current.value = !dataRegister.current.value;
  }, [])

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
       {/*  <input 
            type="text" 
            placeholder="type your name" 
            ref={nameInputRef} 
        /> */}

        <Input 
          name="name" 
          label="full name: " 
          ref={nameInputRef}
        />

        <button type="button" onClick={handleDataRegister}>Data register</button>

        <button type="submit">Send</button> {/* imperative form */}
      </form>
    </div>
  );
}

export default App;
