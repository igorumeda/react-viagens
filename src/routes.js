import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";

import Home from './pages/Home'
import Reservas from './pages/Reservas'

export default function Routes(){
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/reservas" exact component={Reservas} />
        </Switch>
    )
}