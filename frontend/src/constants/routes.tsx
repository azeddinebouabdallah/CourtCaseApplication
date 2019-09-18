export interface IRouteNameType {
  APP: string;
  LOGIN: string;
  REGISTRATION: string;
  FORGOT_PASSWORD: string;
  RESET_PASSWORD: string;
}

const routes: IRouteNameType = {
  APP: "/",
  LOGIN: "/login",
  REGISTRATION: "/create-account",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password/:resetToken",
};

export default routes;
