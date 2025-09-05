import e from "express";
import cors from "cors";
import leadRoutes from "./api/routes/lead.router.js";

const app = e();


app.use(e.json());
app.use(cors({
    origin: process.env.ORIGIN_URL.split(",")
}))

app.use("/api/leads", leadRoutes);


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});