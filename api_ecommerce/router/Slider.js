import routerx from 'express-promise-router'
import slidercontroller from '../controllers/SliderController'
import auth from '../middlewares/auth'

import multiparty from 'connect-multiparty'
var path = multiparty ({ uploadDir: './uploads/slider'})
const router = routerx();
// http://localhost:3000/api/users/register

router.post("/register",[auth.verifyAdmin,path],slidercontroller.register);
router.put("/update",[auth.verifyAdmin,path],slidercontroller.update);
router.get("/list",auth.verifyAdmin,slidercontroller.list);
router.delete("/delete",auth.verifyAdmin,slidercontroller.remove);

router.get("/uploads/slider/:img",slidercontroller.obtener_imagen);

export default router;