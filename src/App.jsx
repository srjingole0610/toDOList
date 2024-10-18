import FirstModule from "./component/FirstModule"
import InlineComponent from "./component/inlineComponent"
import SecondModule from "./component/SecondModule"
import StylesheetComponent from "./component/StylesheetComponent"
import TodoForm from "./component/TodoForm"

function App() {
  return (
    <div>
      <TodoForm />
      <InlineComponent />
      <StylesheetComponent />
      <FirstModule />
      <SecondModule />
    </div>
  )
}

export default App
