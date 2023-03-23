import { io } from "socket.io-client";
const ENDPOINT = "http://localhost:5000"; //-> After deployment

export const socket = io(ENDPOINT);
