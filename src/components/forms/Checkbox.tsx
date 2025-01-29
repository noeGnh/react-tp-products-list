import type { CheckboxProps } from '../../types'

/**
 * A checkbox component that displays a labeled checkbox.
 *
 * @param {boolean} checked - Determines if the checkbox is checked.
 * @param {(e: React.ChangeEvent<HTMLInputElement>) => void} setChecked - Handler to update the checked state.
 * @param {string} label - The label displayed next to the checkbox.
 * @returns {JSX.Element} A checkbox input with a label.
 */

function Checkbox({ checked, setChecked, label }: CheckboxProps): JSX.Element {
  return (
    <>
      <input
        id="checkbox"
        type="checkbox"
        checked={checked}
        onChange={setChecked}
        className="mr-2"
      />
      <label htmlFor="checkbox">{label}</label>
    </>
  )
}

export default Checkbox
