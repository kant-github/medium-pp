"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogInput = exports.createBlogInput = exports.signInInput = exports.signUpInput = void 0;
const zod_1 = __importDefault(require("zod"));
exports.signUpInput = zod_1.default.object({
    name: zod_1.default.string(),
    username: zod_1.default.string(),
    password: zod_1.default.string().min(6)
});
exports.signInInput = zod_1.default.object({
    username: zod_1.default.string(),
    password: zod_1.default.string().min(6)
});
exports.createBlogInput = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string()
});
exports.updateBlogInput = zod_1.default.object({
    title: zod_1.default.string().optional(),
    content: zod_1.default.string().optional(),
    id: zod_1.default.number()
});
