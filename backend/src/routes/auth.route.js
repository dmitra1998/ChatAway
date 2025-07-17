import express from "express"
import {signup, login, logout, googleSignUp, googleSignIn} from "../controllers/auth.controller.js"
import {protectRoute} from "../middleware/auth.middleware.js"
import { updateProfile, checkAuth } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup)

router.post("/googleSignUp", googleSignUp)

router.post("/login", login)

router.post("/googleSignIn", googleSignIn)

router.post("/logout", logout)

router.put("/update-profile", protectRoute, updateProfile)

router.get("/check", protectRoute, checkAuth)

export default router;