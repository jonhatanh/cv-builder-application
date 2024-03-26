export default function BulletListButton({children, onClick}) {

  return (
  <button
    className="flex flex-1 items-center rounded-md p-3  shadow-md shadow-sky-100 transition-all hover:-translate-y-1 hover:text-sky-700 hover:shadow-lg hover:shadow-sky-200"
    onClick={onClick}
    type="button"
  >
    {children}
  </button>
  )
}
