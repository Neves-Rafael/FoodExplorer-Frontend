import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "../pages/Home";
import { PlateView } from "../pages/PlateView";
import { NewPlate } from "../pages/NewPlate";
import { EditPlate } from "../pages/EditPlate";
import { OrderHistory } from "../pages/OrderHistory";

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plateview/:id" element={<PlateView />} />
      <Route path="/newplate" element={<NewPlate />} />
      <Route path="/editplate/:id" element={<EditPlate />} />
      <Route path="/order-history" element={<OrderHistory/>}/>

      {/* <Route path="*" element={<Navigate to="/" />} /> */}
    </Routes>
  );
}
