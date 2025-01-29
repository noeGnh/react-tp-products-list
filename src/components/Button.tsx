function Button({
  children,
  className,
  onClick,
  type = 'button',
}: {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
}) {
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
