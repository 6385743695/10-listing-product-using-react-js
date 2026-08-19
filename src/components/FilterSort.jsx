function FilterSort({
  category,
  sortOrder,
  categories,
  onCategoryChange,
  onSortChange,
  onReset
}) {
  return (
    <div className="filter-container">

      <div className="filter-group">
        <label>Category:</label>

        <select
          value={category}
          onChange={(event) =>
            onCategoryChange(event.target.value)
          }
        >
          <option value="all">
            All Categories
          </option>

          {categories.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label>Sort:</label>

        <select
          value={sortOrder}
          onChange={(event) =>
            onSortChange(event.target.value)
          }
        >
          <option value="default">
            Default
          </option>

          <option value="price-low">
            Price: Low to High
          </option>

          <option value="price-high">
            Price: High to Low
          </option>

          <option value="name-az">
            Name: A to Z
          </option>

          <option value="name-za">
            Name: Z to A
          </option>
        </select>
      </div>

      <button
        className="reset-button"
        onClick={onReset}
      >
        Reset Filters
      </button>

    </div>
  );
}

export default FilterSort;
