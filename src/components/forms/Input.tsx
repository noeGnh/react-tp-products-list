function Input({
  id,
  type,
  value,
  setValue,
  placeholder,
  className = '',
}: {
  id: string
  type: 'number' | 'text'
  value: string | number
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  className: string
}) {
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
