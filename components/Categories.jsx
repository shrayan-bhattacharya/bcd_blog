import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import { getCategories } from '../services'

const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories)
    })
  }, [])

  return (
    <div className="bg-yellow-400 shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-2xl mb-8 font-semibold border-b border-black pb-4">
        Genres
      </h3>
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <span
            className={`cursor-pointer block font-bold ${
              index === categories.length - 1
                ? 'border-b-0'
                : 'border-b border-black'
            } pb-3 mb-3`}
          >
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories
