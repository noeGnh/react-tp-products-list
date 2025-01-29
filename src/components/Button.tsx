import type { ButtonProps } from '../types'

/**
 * A basic button component.
 *
 * @example
 * <Button onClick={() => console.log("Button clicked")}>
 *   Click me
 * </Button>
 *
 * @param {React.ReactNode} children - The content of the button
 * @param {string} [className] - Additional CSS classes to apply to the button
 * @param {(() => void)} [onClick] - A callback function to call when the button is clicked
 * @param {'button' | 'submit'} [type=button] - The type of the button
 * @returns {JSX.Element} A button element
 */
function Button({
  children,
  className,
  onClick,
  type = 'button',
}: ButtonProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      type={type}
      className={
        className +
        ' py-1 px-2 rounded-md border border-gray-300 hover:bg-gray-200'
      }
    >
      {children}
    </button>
  )
}

export default Button
