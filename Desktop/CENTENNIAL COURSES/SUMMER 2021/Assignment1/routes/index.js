"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Home' });
});
router.get('/home', function (req, res, next) {
    res.render('index', { title: 'Home' });
});
router.get('/about', function (req, res, next) {
    res.render('index', { title: 'About' });
});
router.get('/project', function (req, res, next) {
    res.render('index', { title: 'Project' });
});
router.get('/service', function (req, res, next) {
    res.render('index', { title: 'Service' });
});
router.get('/contact', function (req, res, next) {
    res.render('index', { title: 'Contact' });
});
//# sourceMappingURL=index.js.map