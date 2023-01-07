import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AddTask,
  Categories,
  Home,
  Login,
  Profile,
  SaveCategory,
  SaveUser,
  SignUp,
  Users,
} from "./pages";

import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        {/*   http://localhost:3000/   */}
        <Route index element={<Home />} />

        {/*   http://localhost:3000/tasks/add   */}
        <Route path="tasks/add" element={<AddTask />} />

        {/*   http://localhost:3000/login   */}
        <Route path="login" element={<Login />} />

        {/*   http://localhost:3000/profile   */}
        <Route path="profile" element={<Profile />} />

        {/*   http://localhost:3000/signup   */}
        <Route path="signup" element={<SignUp />} />

        <Route path="users/">
          {/*   http://localhost:3000/users   */}
          <Route index element={<Users />} />

          {/*   http://localhost:3000/users/save   */}
          <Route path="save" element={<SaveUser />} />

          {/*   http://localhost:3000/users/save/-NJD8Tj3CVCAzyyc2hEo   */}
          <Route path="save/:id" element={<SaveUser />} />
        </Route>

        <Route path="categories/">
          {/*   http://localhost:3000/categories   */}
          <Route index element={<Categories />} />

          {/*   http://localhost:3000/categories/save   */}
          <Route path="save" element={<SaveCategory />} />

          {/*   http://localhost:3000/categories/save/-NJD8Tj3CVCAzyyc2hEo   */}
          <Route path="save/:id" element={<SaveCategory />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
