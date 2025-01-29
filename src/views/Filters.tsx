import Checkbox from '../components/forms/Checkbox'
import Input from '../components/forms/Input'

function Filters({
  searchValue,
  handleSearchValue,
  minPrice,
  handleMinPrice,
  maxPrice,
  handleMaxPrice,
  onlyInStock,
  handleOnlyInStock,
}: {
  searchValue: string
  handleSearchValue: (e: React.ChangeEvent<HTMLInputElement>) => void
  minPrice: number
  handleMinPrice: (e: React.ChangeEvent<HTMLInputElement>) => void
  maxPrice: number
  handleMaxPrice: (e: React.ChangeEvent<HTMLInputElement>) => void
  onlyInStock: boolean
  handleOnlyInStock: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
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
    </>
  )
}

export default Filters
