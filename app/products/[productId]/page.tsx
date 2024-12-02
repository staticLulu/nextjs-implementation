import { Metadata } from "next";

type Props = {
  params: {
    productId: string
  }
}

export const generateMetaData = async ({ params}: Props): Promise<Metadata> => {
  const title = await new Promise(resolve => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`)
    }, 100)
  })
  return {
    title: `Product ${title}`
  }
}

const ProductDetails = ({params}: Props) => {
  return (
    <div>
      product details about product is {params.productId}
    </div>
  )
}

export default ProductDetails;