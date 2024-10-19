import express from "express";
import {
  fetchAllContacts,
  sendContact,
} from "../controllers/contact.controller.js";

const router = express.Router();

router.post(`/sendMessage`, sendContact);
router.get(`/fetchAllContacts`, fetchAllContacts);

export default router;
