import routerx from 'express-promise-router'
import productcontroller from '../controllers/ProductController'
import auth from '../middlewares/auth'
import variedadcontroller from '../controllers/VariedadController'

import multiparty from 'connect-multiparty'
var path = multiparty ({ uploadDir: './uploads/product'})
const router = routerx();
// http://localhost:3000/api/users/register

router.post("/register",[auth.verifyAdmin,path],productcontroller.register);
router.post("/register_imagen",[auth.verifyAdmin,path],productcontroller.register_imagen);
router.post("/remove_imagen",[auth.verifyAdmin,path],productcontroller.remove_imagen);
router.put("/update",[auth.verifyAdmin,path],productcontroller.update);
router.get("/list",auth.verifyAdmin,productcontroller.list);
router.delete("/delete",auth.verifyAdmin,productcontroller.remove);

router.get("/uploads/product/:img",productcontroller.obtener_imagen);

router.get("/show/:id",productcontroller.show);

//VARIEDAD

router.post("/register-variedad",[auth.verifyAdmin,path],variedadcontroller.register);
router.put("/update-variedad",[auth.verifyAdmin,path],variedadcontroller.update);
router.delete("/delete-variedad/:id",[auth.verifyAdmin,path],variedadcontroller.delete);
export default router;