import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'

const CourseCard = ({ course }) => {
    const { currency, calculateRating } = useContext(AppContext)

    // Return nothing if course is missing
    if (!course || typeof course !== 'object') return null

    const {
        _id,
        courseThumbnail,
        courseTitle,
        educator,
        courseRatings = [],
        coursePrice = 0,
        discount = 0,
    } = course

    const rating = calculateRating(course)
    const finalPrice = (coursePrice - discount * coursePrice / 100).toFixed(2)

    return (
        <Link onClick={() => scrollTo(0, 0)} to={`/course/${_id}`} className="border border-gray-500/30 pb-6 overflow-hidden rounded-lg">
            <img className="w-full" src={courseThumbnail} alt={courseTitle || 'Course Thumbnail'} />
            <div className="p-3 text-left">
                <h3 className="text-base font-semibold">{courseTitle}</h3>
                <p className="text-gray-500">{educator?.name || 'Unknown Educator'}</p>
                <div className="flex items-center space-x-2">
                    <p>{rating}</p>
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <img
                                key={i}
                                className="w-3.5 h-3.5"
                                src={i < Math.floor(rating) ? assets.star : assets.star_blank}
                                alt=""
                            />
                        ))}
                    </div>
                    <p className="text-gray-500">({courseRatings.length})</p>
                </div>
                <p className="text-base font-semibold text-gray-800">
                    {currency}{finalPrice}
                </p>
            </div>
        </Link>
    )
}

export default CourseCard
