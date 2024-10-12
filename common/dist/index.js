"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePost = exports.createPost = exports.signIn = exports.signUp = void 0;
const zod_1 = __importDefault(require("zod"));
exports.signUp = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6)
});
exports.signIn = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6)
});
exports.createPost = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string()
});
exports.updatePost = zod_1.default.object({
    id: zod_1.default.string(),
    title: zod_1.default.string(),
    content: zod_1.default.string()
});
