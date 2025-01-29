import { AnimatePresence, motion } from 'framer-motion'
import CategoryProducts from './CategoryProducts'
import type { TableProps } from '../types'

/**
 * Renders a table with product categories and their respective products.
 * Each category is displayed as a row, followed by its filtered products.
 *
 * @param {TableProps} props
 * @param {string[]} props.categories - List of categories to display.
 * @param {number} props.minPrice - Minimum price filter for products.
 * @param {number} props.maxPrice - Maximum price filter for products.
 * @param {string} props.searchValue - Search query to filter products by name.
 * @param {boolean} props.onlyInStock - Flag to filter only in-stock products.
 *
 * @returns {JSX.Element} A table displaying categories and filtered products.
 */

function Table({
  categories,
  minPrice,
  maxPrice,
  searchValue,
  onlyInStock,
}: TableProps): JSX.Element {
  return (
    <>
      <table className="w-full">
        <thead>
          <tr>
            <Th>Nom</Th>
            <Th>Prix</Th>
          </tr>
        </thead>
        <tbody>
          <AnimatePresence>
            {categories.map((category, index) => {
              return (
                <>
                  <motion.tr
                    key={category}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <td
                      colSpan={2}
                      className="bg-slate-300 py-1 rounded-md text-center"
                    >
                      {category}
                    </td>
                  </motion.tr>
                  <CategoryProducts
                    category={category}
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                    searchValue={searchValue}
                    onlyInStock={onlyInStock}
                  />
                </>
              )
            })}
          </AnimatePresence>
        </tbody>
      </table>
    </>
  )
}

function Th({ children }: { children: React.ReactNode }) {
  return <th className="bg-white rounded-md py-1">{children}</th>
}

export default Table
