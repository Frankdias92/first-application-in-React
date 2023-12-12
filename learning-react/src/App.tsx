import { ComponentWithProps } from "./components/ComponentProps"
import { Constructor } from "./components/Constructor"
import { MyCounter } from "./components/MyCounter"
import { MyFirstComponent } from "./components/MyFirstComponent"
import { MyList } from "./components/MyList"
import { SideEffect } from "./components/SideEffects"


function App() {

  return (
    <>
      <h1>Aprendendo React e suas funcionalidades</h1>

      <MyFirstComponent />

      <ComponentWithProps
        title="Criando componentes com props"
        text="As props são uma forma de passar dados de um componente pai para um componente filho, permitindo a reutilização e a personalização dos componentes."
      />

      <MyCounter />

      <MyList />

      <SideEffect />

      <Constructor name="Franklin" level="" age={31} course="O codigo não quebra se faltar algum props"/>

    </>
  )
}

export default App
