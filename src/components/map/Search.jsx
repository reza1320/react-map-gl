import { useState, useRef, useEffect, startTransition } from 'react'
import './CSS/searchBox.css'







export default function Search({ data, getFilteredSearch, getAllData, EmptyValueSearchBox, EmptyedSearchVal }) {
  const [SearchVal, setSearchVal] = useState('')
  const [FilteredData, setFilteredData] = useState([])
  const inputRef = useRef()

  // Change input value
  const filterBySearch = (event) => {
    startTransition(() => {
      setSearchVal(event.target.value)
     return setFilteredData(data?.filter((item) => item.name?.toLowerCase().includes(SearchVal?.toLowerCase())))
    })
  }

  // onBlur: Use the onBlur prop to detect focus lost (focusOut) event in React.
  const handleInputBlur = () => {
   return inputRef.current.focus()
  }

  useEffect(() => {
    getFilteredSearch(FilteredData)
  }, [FilteredData])

  // vaghti dar input meghdar vared mikardim va bad pak mikardim dar setFilteredData() maghadir pak nemishpdan bekhater hamin line zir ra neveshtim
  useEffect(() => {
    if (SearchVal.length === 0) {
      setFilteredData([])
     return getAllData(data)
    }
    if (EmptyValueSearchBox === null) {
      setSearchVal('')
     return EmptyedSearchVal(undefined)
    }
  }, [SearchVal, EmptyValueSearchBox])






  return (
    <input
      type="text"
      placeholder="Search Provence"
      aria-label="Search"
      aria-describedby="button-addon1"
      translate='no'
      value={SearchVal}
      onChange={filterBySearch}
      ref={inputRef}
      onBlur={handleInputBlur}
    />
  )
}