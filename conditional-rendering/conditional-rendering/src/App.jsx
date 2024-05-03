import UserGreeting from "./UserGreeting"

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={true} username="bro code!"/>
      <UserGreeting isLoggedIn={false} username="bro code!"/>
    </>
  )
}

export default App
