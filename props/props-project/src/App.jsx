import Student from "./Student"

function App() {

  return (
   <>
    <Student name="Sponge Bob" age={30} isStudent={false}/>
    <Student name="Furkan" age={25} isStudent={true}/>
    <Student age={25} isStudent={true}/>
   </>
  
  )
}
export default App
