import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Provider } from "react-redux";
import { setupStore } from "./redux/store";

const store = setupStore();

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
