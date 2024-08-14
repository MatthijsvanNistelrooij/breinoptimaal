import { AiOutlinePlusSquare } from "react-icons/ai"
import Image from "next/image"

const AddButton = ({ flavor, name, onAdd, product, qty }) => {
  return (
    <button
      type="button"
      className="w-full border border-gray-300 p-3 rounded-md 
               flex flex-row cursor-pointer justify-between lg:min-w-[450px] 
              hover:border-red-500"
      onClick={() => onAdd(product, qty)}
    >
      <div className="flex flex-row gap-4">
        <Image src={flavor} alt="image" width={30} height={30} />
        <span className="font-semibold mt-1">{name}</span>
      </div>

      <div className="flex flex-row">
        <span className="text-sm text-gray-500 mt-1">Voeg toe</span>
        <i className="text-gray-400 p-1.5">
          <AiOutlinePlusSquare />
        </i>
      </div>
    </button>
  )
}

export default AddButton
