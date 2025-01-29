import { useState } from 'react'
import { Icon } from '@iconify/react'
import Button from '../components/Button'
import { motion } from 'framer-motion'
import { PRODUCTS } from '../utils'
import Filters from './Filters'
import Table from './Table'

/**
 * Container is the main component of the application. It displays the header,
 * the filters form, the table with the products, and a button to clear the
 * filters.
 *
 * The state of the component is composed of four values:
 * - `minPrice`: the minimum price of the products to display,
 *   initialized to 0.
 * - `maxPrice`: the maximum price of the products to display,
 *   initialized to 0.
 * - `searchValue`: the value of the search input,
 *   initialized to an empty string.
 * - `onlyInStock`: a boolean indicating whether to only display products
 *   that are in stock, initialized to false.
 *
 * The component also defines three functions:
 * - `clearFilters`: resets the state of the component to its initial value.
 * - `isClearFiltersButtonVisible`: returns a boolean indicating whether the
 *   button to clear the filters should be visible.
 *
 * The component renders a header with the title of the application, a form
 * with the filters, a table with the products, and a button to clear the
 * filters. The button is only visible if at least one of the filters is not
 * in its initial state.
 */
function Container() {
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [onlyInStock, setOnlyInStock] = useState(false)

  const clearFilters = () => {
    setMinPrice(0)
    setMaxPrice(0)
    setSearchValue('')
    setOnlyInStock(false)
  }

  const isClearFiltersButtonVisible = () => {
    return minPrice || maxPrice || searchValue || onlyInStock
  }

  const categories: string[] = []
  PRODUCTS.map((product) => product.category).forEach((category) => {
    if (categories.indexOf(category) === -1) {
      categories.push(category)
    }
  })

  return (
    <>
      <div className="absolute top-0 w-full h-[75px] bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
        <h1>TP React: Liste de produits</h1>
      </div>
      <div
        id="container"
        className="w-full h-screen flex items-center justify-center"
      >
        <div className="py-5 px-10 bg-slate-200 dark:bg-slate-700 rounded-md">
          <Filters
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            minPrice={minPrice}
            setMinPrice={setMinPrice}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            onlyInStock={onlyInStock}
            setOnlyInStock={setOnlyInStock}
          />

          <div className="mt-5">
            <Table
              categories={categories}
              minPrice={minPrice}
              maxPrice={maxPrice}
              searchValue={searchValue}
              onlyInStock={onlyInStock}
            />
          </div>
          <div className="text-center">
            {isClearFiltersButtonVisible() && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="inline-block"
              >
                <Button className="mt-5" onClick={clearFilters} type="button">
                  <div className="flex items-center justify-center">
                    <Icon
                      fontSize={20}
                      icon="mdi:trash-can-outline"
                      className="mr-1"
                    />
                    Effacer les filtres
                  </div>
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Container
