import { create, findByIdAndUpdate, findByIdAndDelete, find } from "../models/product.model";

// 🟢 Thêm product
const addProduct = async (name, price, categoryId) => {
    return await create({ name, price, categoryId });
};

// 🔄 Cập nhật product
const updateProduct = async (id, newName, newPrice, newCategoryId) => {
    return await findByIdAndUpdate(id, { name: newName, price: newPrice, categoryId: newCategoryId }, { new: true });
};

// ❌ Xóa product
// const deleteProduct = async (id) => {
//     return await findByIdAndDelete(id);
// };

// 📜 Lấy danh sách sản phẩm
const getProducts = async () => {
    return await find().populate("categoryId");
};

// 🔍 Tìm kiếm sản phẩm theo tên
const searchProductsByName = async (name) => {
    return await find({ name: new RegExp(name, "i") });
};

// 📜 Lấy danh sách sản phẩm theo categoryId
const getProductsByCategory = async (categoryId) => {
    return await find({ categoryId });
};

export default { addProduct, updateProduct, deleteProduct, getProducts, searchProductsByName, getProductsByCategory };
