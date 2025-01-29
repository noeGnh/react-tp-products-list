function Checkbox({
  checked,
  setChecked,
  label,
}: {
  checked: boolean
  setChecked: (e: React.ChangeEvent<HTMLInputElement>) => void
  label: string
}) {
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
