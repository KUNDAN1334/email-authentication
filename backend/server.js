require("colors");
const app=require("./src/app");
const {connectDB}=require("./src/config/db.config")
const port=process.env.PORT || 8000

connectDB();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
