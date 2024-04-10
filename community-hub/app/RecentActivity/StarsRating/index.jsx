import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";


export function StarsRating({ rating }) {
    return (
        <div className="flex gap-2 text-yellow-500">
            
            <div>
                {
                    rating >= 1 ? (
                        <FaStar />
                    ) : (
                        <FaRegStar />
                    )
                }
            </div>

            <div>
                {
                    rating >= 2 ? (
                        <FaStar />
                    ) : (
                        <FaRegStar />
                    )
                }
            </div>

            <div>
                {
                    rating >= 3 ? (
                        <FaStar />
                    ) : (
                        <FaRegStar />
                    )
                }
            </div>

            <div>
                {
                    rating >= 4 ? (
                        <FaStar />
                    ) : (
                        <FaRegStar />
                    )
                }
            </div>

            <div>
                {
                    rating >= 5 ? (
                        <FaStar />
                    ) : (
                        <FaRegStar />
                    )
                }
            </div>
            
        </div>
    )
}