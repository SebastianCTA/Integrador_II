import routerx from 'express-promise-router'
import cuponeController from '../controllers/CuponeController'
import auth from '../middlewares/auth'

const router = routerx();

router.post("/register",auth.verifyAdmin,cuponeController.register);
router.post("/update",auth.verifyAdmin,cuponeController.update);
router.post("/list",auth.verifyAdmin,cuponeController.list);
router.post("/delete",auth.verifyAdmin,cuponeController.delete);

export default router;