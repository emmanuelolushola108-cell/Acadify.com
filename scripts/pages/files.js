"use strict";
import { resources } from "../utils/storage.js";
import { fileUpload } from "../components/file-card.js";
import { searchResources } from "../services/authServices.js";
const searchINputField = document.querySelector(".search-input");
fileUpload(resources);
const con = document.querySelector(".uploads-con");
searchResources(searchINputField, resources, con);
