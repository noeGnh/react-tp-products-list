import type { CheckboxProps } from '../../types'

function Checkbox({ checked, setChecked, label }: CheckboxProps) {
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
