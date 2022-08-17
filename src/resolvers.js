const productModel = require('./models/product');

const resolvers = {
    Query: {
        getAll: async () => {
            const products = await productModel.find();
            return products;
        },
        getById: async (parent, args) => {
            console.log(args);
            const productR = await productModel.findById(args.id);
            return productR;
        }
    },
    Mutation: {
        createProduct: async (parent, args, context, info) => {
            const { name, description, code, price } = args;
            const newProduct = new productModel({ name, description, code, price });
            await newProduct.save();
            // console.log(parent, args, context, info);
            return newProduct;
        },
        updateProduct: async (parent, args, context, info) => {
            const data = {
                name: args.name,
                description: args.description,
                code: args.code,
                price: args.price
            }
            const id = args.id;
            const product = await productModel.findByIdAndUpdate({_id: id}, data);

            return product;
        },
        deleteProduct: async (parent, args, context, info) => {
            const { id } = args;
            const product = await productModel.findByIdAndDelete(id);
            return product;
        }
    }
}

module.exports = resolvers;