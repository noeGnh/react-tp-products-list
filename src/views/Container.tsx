import { useState } from 'react'
import Input from '../components/forms/Input'
import Checkbox from '../components/forms/Checkbox'
import { Product } from '../types'
import { Icon } from '@iconify/react'
import Button from '../components/Button'
import { motion, AnimatePresence } from 'framer-motion'
import { CURRENCY, PRODUCTS } from '../utils'

function Container() {
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [onlyInStock, setOnlyInStock] = useState(false)

  const handleMinPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(parseInt(event.target.value))
  }

  const handleMaxPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(parseInt(event.target.value))
  }

  const handleSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  const handleOnlyInStock = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOnlyInStock(event.target.checked)
  }

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
      <div className="absolute top-0 w-full h-[75px] bg-slate-200 flex items-center justify-center">
        <h1>TP React: Liste de produits</h1>
      </div>
      <div
        id="container"
        className="w-full h-screen flex items-center justify-center"
      >
        <div className="py-5 px-10 bg-slate-200 rounded-md">
          <div>
            <label htmlFor="search" className="text-sm">
              Rechercher un produit
            </label>
            <Input
              id="search"
              placeholder="Rechercher"
              value={searchValue}
              setValue={handleSearchValue}
              type="text"
              className="w-full"
            />
          </div>

          <div className="flex gap-2 mt-2">
            <div className="w-1/2">
              <label htmlFor="minPrice" className="text-sm">
                Prix minimum
              </label>
              <Input
                id="minPrice"
                placeholder="Prix minimum"
                value={minPrice}
                setValue={handleMinPrice}
                type="number"
                className="w-full"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="maxPrice" className="text-sm">
                Prix maximum
              </label>
              <Input
                id="maxPrice"
                placeholder="Prix maximum"
                value={maxPrice}
                setValue={handleMaxPrice}
                type="number"
                className="w-full"
              />
            </div>
          </div>

          <div className="mt-4 text-center">
            <Checkbox
              checked={onlyInStock}
              setChecked={handleOnlyInStock}
              label="Afficher uniquement les produits en stock"
            />
          </div>

          <div className="mt-5">
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

function Th({ children }: { children: React.ReactNode }) {
  return <th className="bg-white rounded-md py-1">{children}</th>
}

function CategoryProducts({
  category,
  minPrice,
  maxPrice,
  searchValue,
  onlyInStock,
}: {
  category: string
  minPrice: number
  maxPrice: number
  searchValue: string
  onlyInStock: boolean
}) {
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
                <td className="py-1">{product.name}</td>
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

export default Container
