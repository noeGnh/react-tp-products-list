import { AnimatePresence, motion } from 'framer-motion'
import CategoryProducts from './CategoryProducts'

function Table({
  categories,
  minPrice,
  maxPrice,
  searchValue,
  onlyInStock,
}: {
  categories: string[]
  minPrice: number
  maxPrice: number
  searchValue: string
  onlyInStock: boolean
}) {
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
