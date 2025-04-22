import { NotFound } from "@/shared/pages/not-found";
import { Route, Routes } from "react-router";
import { dragonRoutes } from "./private/dragon";
import { authRoutes } from "./public/auth";

export function AppRoutes() {
  return (
    <Routes>
      {authRoutes}
      {dragonRoutes}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}