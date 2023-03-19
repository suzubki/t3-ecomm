import { useRouter } from "next/router"
import { capitalizeFirstLetter } from "~/utils"

export const PathReader = () => {
  const router = useRouter()
  const paths = router.asPath.split("/").slice(1).join("-_-").split("-").map((path) => path.replace("_", "/"))
  const restPaths = paths.slice(0, paths.length - 1)
  const lastPath = paths[paths.length - 1]

  return (
    <div className="hidden invisible sm:visible sm:block sm:mx-10 sm:self-start md:mx-20">
      <div className="flex items-end gap-1 text-xs text-dark-primary">
        {/* Agregar un Link a cada uno de estos elementos */}
        &gt;
        <span className="underline-gray-400 cursor-pointer font-medium underline">
          Home
        </span>
        <span>/</span>
        {
          restPaths.map((path, index) => (
            <span key={index} className={`${path === '/' ? "" : " underline-gray-400 cursor-pointer font-medium underline"}`}>
              {capitalizeFirstLetter(path)}
            </span>
          ))
        }
        {
          lastPath !== "/" && typeof lastPath === 'string' && (
            <span className="text-gray-400 cursor-pointer font-medium">
              {capitalizeFirstLetter(lastPath)}
            </span>
          )
        }
      </div>
    </div>
  )
}