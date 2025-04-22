import { DragonsList } from "@/modules/dragons/pages/list";
import { DragonsRegister } from "@/modules/dragons/pages/register";
import { AuthenticatedLayout } from "@/shared/layouts/authenticated";
import { Route } from "react-router";

export const dragonRoutes = (
  <Route path="dragons" element={<AuthenticatedLayout />}>
    <Route path="list" element={<DragonsList />} />
    <Route path="register/:id" element={<DragonsRegister />} />
    <Route path="details" />
  </Route>
)