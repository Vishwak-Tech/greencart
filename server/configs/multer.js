import multer from "multer";

// Multer is a middleware for handling file uploads in Node.js + Express.
// Multer helps your backend receive that file.
export const upload = multer({
    storage: multer.diskStorage({})    //store files on your server disk
})