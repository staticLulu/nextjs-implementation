import Link from "next/link"

const ProductList = () => {
  const productId = 100
  return  (
    <div>
      <Link href={'/'}>Home</Link>
      <p>ProductList</p>
      <p>
        <Link href={'products/1'}>product 1</Link>
      </p>
      <p>
        <Link href={'products/2'}>product 2</Link>
      </p>
      <p>
        <Link href={'products/3'} replace>product 3</Link>
      </p>

      <p>
        <Link href={`products/${productId}`}>Product {productId}</Link>
      </p>
    </div>
  )
}

export default ProductList