// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, {useRef, useState} from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // Extra Credit -1: Using Refs
  const userInputVal = useRef()
  function handleSubmit(event) {
    event.preventDefault()
    // onSubmitUsername(event.target.elements.usernameInput.value)
    onSubmitUsername(userInputVal.current.value)
  }

  const [error, setError] = useState(null)

  function handleChange(event) {
    const username = event.target.value
    const isValid = username === username.toLowerCase()
    setError(isValid ? null : 'username must be lowercase')
    console.log(error)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          ref={userInputVal}
          type="text"
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
