import { create, findByIdAndUpdate, exists, findByIdAndDelete, find } from "./category.model";

// 🟢 Thêm category
const addCategory = async (name, parentId = null) => {
    return await create({ name, parentId });
};
 
// 🔄 Cập nhật category
const updateCategory = async (id, newName) => {
    return await findByIdAndUpdate(id, { name: newName }, { new: true });
};

// ❌ Xóa category (chỉ khi không có product/con)
// const deleteCategory = async (id) => {
//     const hasProducts = await require("./product.service").getProductsByCategory(id);
//     const hasSubCategories = await exists({ parentId: id });

//     if (hasProducts.length > 0 || hasSubCategories) {
//         throw new Error("Cannot delete category with products or subcategories.");
//     }

//     return await findByIdAndDelete(id);
// };

// 📜 Lấy danh sách categories (bao gồm con)
const getCategories = async () => {
    return await find().populate("parentId");
};

export default { addCategory, updateCategory, deleteCategory, getCategories };
