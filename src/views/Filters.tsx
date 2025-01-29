import Checkbox from '../components/forms/Checkbox'
import Input from '../components/forms/Input'
import type { FiltersProps } from '../types'

/**
 * Displays a form with filters for products.
 *
 * @param {FiltersProps} props
 * @param {string} props.searchValue - The value of the search input.
 * @param {(e: React.ChangeEvent<HTMLInputElement>) => void} props.setSearchValue - The function to be called when the search input changes.
 * @param {number} [props.minPrice] - The minimum price a product must have to be included.
 * @param {(e: React.ChangeEvent<HTMLInputElement>) => void} [props.setMinPrice] - The function to be called when the minPrice input changes.
 * @param {number} [props.maxPrice] - The maximum price a product must have to be included.
 * @param {(e: React.ChangeEvent<HTMLInputElement>) => void} [props.setMaxPrice] - The function to be called when the maxPrice input changes.
 * @param {boolean} [props.onlyInStock] - Whether to only include products that are in stock.
 * @param {(e: React.ChangeEvent<HTMLInputElement>) => void} [props.setOnlyInStock] - The function to be called when the onlyInStock checkbox changes.
 *
 * @returns {JSX.Element} A form with the search input, minPrice and maxPrice inputs, and the onlyInStock checkbox.
 */
function Filters({
  searchValue,
  setSearchValue,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  onlyInStock,
  setOnlyInStock,
}: FiltersProps): JSX.Element {
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

  return (
    <>
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
            min={0}
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
            min={minPrice}
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
    </>
  )
}

export default Filters
