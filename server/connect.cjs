const mongoose = require("mongoose");
require("dotenv").config({ path: "./config.env" });

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "demoMongaDB", // Đảm bảo đúng chữ hoa/chữ thường
        });
        console.log("✅ MongoDB Connected...");
    } catch (error) {
        console.error("❌ Lỗi kết nối MongoDB:", error);
        process.exit(1);
    }
};

module.exports = connectDB;
