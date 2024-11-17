
import express from "express"
import { login,
     logout,
      signup, 
      verifyEmail 
    } from "../contollers/auth.controller.js";

export const authRoutes = express.Router();

authRoutes.post("/signup", signup);
authRoutes.post("/login", login);
authRoutes.post("/logout", logout);

authRoutes.post("/verify-email", verifyEmail);









export default authRoutes;