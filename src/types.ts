export interface Product {
  category: string
  price: number
  stocked: boolean
  name: string
}

export interface TableProps {
  categories: string[]
  minPrice: number
  maxPrice: number
  searchValue: string
  onlyInStock: boolean
}

export interface FiltersProps {
  searchValue: string
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
  minPrice: number
  setMinPrice: React.Dispatch<React.SetStateAction<number>>
  maxPrice: number
  setMaxPrice: React.Dispatch<React.SetStateAction<number>>
  onlyInStock: boolean
  setOnlyInStock: React.Dispatch<React.SetStateAction<boolean>>
}

export interface CategoryProductsProps {
  category: string
  minPrice: number
  maxPrice: number
  searchValue: string
  onlyInStock: boolean
}

export interface InputProps {
  id: string
  min?: number
  max?: number
  type: 'number' | 'text'
  value: string | number
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  className: string
}

export interface ButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
}

export interface CheckboxProps {
  checked: boolean
  setChecked: (e: React.ChangeEvent<HTMLInputElement>) => void
  label: string
}
