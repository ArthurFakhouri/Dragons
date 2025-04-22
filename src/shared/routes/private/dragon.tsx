import { DragonsList } from "@/modules/dragons/pages/list";
import { AuthenticatedLayout } from "@/shared/layouts/authenticated";
import { Route } from "react-router";

export const dragonRoutes = (
  <Route path="dragons" element={<AuthenticatedLayout />}>
    <Route path="list" element={<DragonsList />} />
    <Route path="register/:id" />
    <Route path="details" />
  </Route>
)