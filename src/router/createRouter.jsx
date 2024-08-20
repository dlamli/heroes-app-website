import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import { dc, error, heroesApp, login, marvel } from "src/router/paths";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path={heroesApp.path}
            element={heroesApp.component}
            errorElement={error.component}
        >
            <Route path={marvel.path} element={marvel.component} />
            <Route path={dc.path} element={dc.component} />
            <Route path={login.path} element={login.component} />
        </Route>
    )
);
