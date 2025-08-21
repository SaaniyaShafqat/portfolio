import {useEffect} from "react";
import {
  Main,
} from "./components";
import './index.scss';

function App() {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <div className={`main-container`}>
            <Main/>
    </div>
    );
}

export default App;