import { AnimatePresence, motion } from 'framer-motion'
import type { CategoryProductsProps, Product } from '../types'
import { CURRENCY, PRODUCTS } from '../utils'

/**
 * Displays a list of products, filtered by category, search value, and price range,
 * with optional filtering by stocked products.
 *
 * @param {CategoryProductsProps} props
 * @param {string} props.category - The category of products to display.
 * @param {number} [props.minPrice] - The minimum price a product must have to be included.
 * @param {number} [props.maxPrice] - The maximum price a product must have to be included.
 * @param {string} [props.searchValue] - A search query to filter products by.
 * @param {boolean} [props.onlyInStock] - Whether to only include products that are in stock.
 *
 * @returns {JSX.Element} A table row for each product, with the product name and price.
 */
function CategoryProducts({
  category,
  minPrice,
  maxPrice,
  searchValue,
  onlyInStock,
}: CategoryProductsProps): JSX.Element {
  const filteredProducts = () => {
    let products: Product[] = PRODUCTS.filter(
      (product) => product.category === category
    )

    if (searchValue) {
      products = products.filter((product) =>
        product.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    }

    if (onlyInStock) {
      products = products.filter((product) => product.stocked)
    }

    if (minPrice) {
      products = products.filter((product) => product.price >= minPrice)
    }

    if (maxPrice) {
      products = products.filter((product) => product.price <= maxPrice)
    }

    return products
  }

  return (
    <>
      <AnimatePresence>
        {filteredProducts().map((product, index) => {
          return (
            <>
              <motion.tr
                key={product.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <td
                  className={
                    'py-1 ' +
                    (product.stocked ? '' : 'line-through text-red-500')
                  }
                >
                  {product.name}
                </td>
                <td className="py-1">
                  {CURRENCY}
                  {product.price}
                </td>
              </motion.tr>
            </>
          )
        })}
      </AnimatePresence>
    </>
  )
}

export default CategoryProducts
