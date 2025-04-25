import './App.css'
import AppLayout from "./layouts/app.tsx";

function App() {

  return (
    <AppLayout>
        <div className={'grid grid-cols-12 gap-5'}>
            <div className="col-span-4">hi</div>
            <div className="col-span-8">hello</div>
        </div>
    </AppLayout>
  )
}

export default App
