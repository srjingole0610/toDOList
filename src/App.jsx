import InlineComponent from "./component/inlineComponent"
import StylesheetComponent from "./component/StylesheetComponent"
import TodoForm from "./component/TodoForm"

function App() {
  return (
    <div>
      <TodoForm />
      <InlineComponent />
      <StylesheetComponent />
    </div>
  )
}

export default App
