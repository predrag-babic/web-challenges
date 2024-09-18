import Review from "@/db/models/Review";
import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  try {
    if (request.method === "GET") {
      const products = await Product.find().sort({ createdAt: -1 });
      response.status(200).json(products);
      return;
    }

    if (request.method === "POST") {
      const productData = request.body;
      let review;
      if (productData.review && productData.rating && productData.reviewTitle) {
        review = await Review.create({
          title: productData.reviewTitle,
          text: productData.review,
          rating: productData.rating,
        });
      }
      await Product.create({
        ...productData,
        reviews: review ? [review._id] : [],
      });
      response.status(201).json({ message: "Product created" });
      return;
    }
  } catch (error) {
    response.status(400).json({ message: "Internal server error" });
    return;
  }
}
