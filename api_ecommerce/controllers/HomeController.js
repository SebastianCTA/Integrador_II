import models from '../models'
import resource from '../resources'

export default {
    list: async(req,res) => {
        try {
            let Sliders = await models.Slider.find({state:1});

            Sliders = Sliders.map((slider) => {
                return resource.Slider.slider_list(slider);
            }) 

            let Categories = await models.Categorie.find({state:1});
            Categories = Categories.map((categorie) => {
                return resource.Categorie.categorie_list(categorie);
            }) 

            let BestProducts = await models.Product.find({state: 2}).sort({"createdAt": -1});
            BestProducts = BestProducts.map((product) => {
                return resource.Product.product_list(product);
            }) 

            let OursProducts = await models.Product.find({state: 2}).sort({"createdAt": 1});
            OursProducts = OursProducts.map((product) => {
                return resource.Product.product_list(product);
            }) 

            res.status(200).json({
                sliders: Sliders,
                categories: Categories,
                best_products: BestProducts,
                our_products: OursProducts,
            });

        } catch (error) {
            res.status(500).send({
                message: "OCURRIO UN ERROR"
            });
            console.log(error);
        }
    },
}