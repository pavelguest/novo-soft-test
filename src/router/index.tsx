import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouteObject,
} from "react-router-dom";
import routePaths from "../utils/constants/routePaths";
import SuspenseRoute from "./SuspenseRoute";
import { MainPage } from "../pages/MainPage";
import { RepoDetailsPage } from "../pages/EditTodoPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { MainLayout } from "../layouts/MainLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route
        path={routePaths.MAIN_PAGE}
        element={
          <SuspenseRoute>
            <MainPage />
          </SuspenseRoute>
        }
      />
      <Route
        path={routePaths.REPO_DETAILS_PAGE}
        element={
          <SuspenseRoute>
            <RepoDetailsPage />
          </SuspenseRoute>
        }
      />
      <Route
        path="*"
        element={
          <SuspenseRoute>
            <NotFoundPage />
          </SuspenseRoute>
        }
      />
    </Route>
  ) as RouteObject[]
);

export default router;
