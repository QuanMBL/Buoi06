import connectDB from "./connect.cjs";
import Category from "./category.model.js";
import Product from "./product.model.js";

const test = async () => {
    try {
        await connectDB(); // Kết nối MongoDB

        console.log("\n🔹 Thêm Category mới...");
        const newCategory = await Category.create({ name: "Điện thoại" });
        console.log("✅ Category đã thêm:", newCategory);

        console.log("\n🔹 Thêm Product mới...");
        const newProduct = await Product.create({
            name: "iPhone 15",
            price: 25000000,
            categoryId: newCategory._id,
        });
        console.log("✅ Product đã thêm:", newProduct);

        console.log("\n🔹 Sửa Category theo ID...");
        const updatedCategory = await Category.findByIdAndUpdate(
            newCategory._id,
            { name: "Smartphone" },
            { new: true }
        );
        console.log("✅ Category sau khi sửa:", updatedCategory);

        console.log("\n🔹 Sửa Product theo ID...");
        const updatedProduct = await Product.findByIdAndUpdate(
            newProduct._id,
            { price: 23000000 },
            { new: true }
        );
        console.log("✅ Product sau khi sửa:", updatedProduct);

        console.log("\n🔹 Lấy danh sách Categories...");
        const categories = await Category.find();
        console.log("✅ Danh sách Categories:", categories);

        console.log("\n🔹 Lấy danh sách Products...");
        const products = await Product.find().populate("categoryId");
        console.log("✅ Danh sách Products:", products);

        console.log("\n🔹 Tìm Product theo tên...");
        const foundProduct = await Product.findOne({ name: "iPhone 15" });
        console.log("✅ Kết quả tìm kiếm:", foundProduct);

        // console.log("\n🔹 Xóa Product theo ID...");
        // await Product.findByIdAndDelete(newProduct._id);
        // console.log("✅ Product đã bị xóa.");

        // console.log("\n🔹 Xóa Category theo ID (nếu không có sản phẩm nào)...");
        // const productExists = await Product.findOne({ categoryId: newCategory._id });
        // if (!productExists) {
        //     await Category.findByIdAndDelete(newCategory._id);
        //     console.log("✅ Category đã bị xóa.");
        // } else {
        //     console.log("❌ Không thể xóa Category vì vẫn còn Product.");
        // }
    } catch (error) {
        console.error("❌ Lỗi trong quá trình kiểm tra:", error);
    } finally {
        process.exit();
    }
};

test();
