import { ComponentWithProps } from "./components/ComponentProps"
import { Constructor } from "./components/Constructor"
import { Footer } from "./components/Footer/Footer"
import { MyCounter } from "./components/MyCounter"
import { MyFirstComponent } from "./components/MyFirstComponent"
import { MyList } from "./components/MyList"
import { SideEffect } from "./components/SideEffects"

import './global.css'


function App() {

  return (
    <>
      <div className="container-layout">
        <h1>Aprendendo React e suas funcionalidades</h1>

        <MyFirstComponent />

        <ComponentWithProps
          title="Criando componentes com props"
          text="As props são uma forma de passar dados de um componente pai para um componente filho, permitindo a reutilização e a personalização dos componentes."
        />

        <MyCounter />

        <div className="wrapper">
          <MyList />
        </div>

        <div className="grid-content">
        
          <div className="seperator">
            <SideEffect />
          </div>

          <div>
            <Constructor
              name="Franklin" 
              level="Junior" 
              age={31} 
              course="Front-End"
            />
          </div>
        </div>


      </div>

      <Footer />
    </>
  )
}

export default App
