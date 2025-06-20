import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import hpp from "hpp";
import helmet from "helmet";
import etag from "etag";
import rateLimit from "express-rate-limit";
import router from "./routes/api.js";


const app = express();

// Security Middleware
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(hpp());

// Parsing
app.use(express.json({limit: "5mb"}));
app.use(express.urlencoded({extended: true, limit:"5mb"}));

// Rate Limiter
const Limiter = rateLimit({
    windowMs: 15*60*1000,
    max:1000
})

app.use(Limiter);

app.set('etag', false)

app.use('/api/v1', router)


export default app;