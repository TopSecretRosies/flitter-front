import { RouteLocation } from "vue-router";

const haveAuthGuard = (_to: RouteLocation, _from: RouteLocation, next: any) => {

  const token = localStorage.getItem("token");

  if (token) {
    // queremos navegar!
    next();
  } else {
    alert("No estás autenticado");
    next({ name: "home" });
  }
};

export default haveAuthGuard;