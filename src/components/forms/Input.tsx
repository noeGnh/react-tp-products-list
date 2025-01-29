import type { InputProps } from '../../types'

/**
 * A simple input component.
 *
 * @param {string} id - The id of the input element.
 * @param {string} type - The type of the input element.
 * @param {string} value - The value of the input element.
 * @param {(e: React.ChangeEvent<HTMLInputElement>) => void} setValue - The function to be called when the value changes.
 * @param {string} placeholder - The placeholder for the input element.
 * @param {string} [className=""] - Additional classes to be added to the input element.
 * @returns {JSX.Element} The input element.
 */
function Input({
  id,
  type,
  value,
  setValue,
  placeholder,
  className = '',
}: InputProps): JSX.Element {
  return (
    <>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={setValue}
        className={
          'p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 ' +
          className
        }
      />
    </>
  )
}

export default Input
