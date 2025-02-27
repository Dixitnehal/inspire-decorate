
import { useState } from 'react';
import { ChevronDown, Sliders } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Category = 'All' | 'Living Room' | 'Bedroom' | 'Dining' | 'Office' | 'Outdoor';
type PriceRange = 'All' | 'Under $100' | '$100-$500' | '$500-$1000' | 'Over $1000';
type SortOption = 'Newest' | 'Price: Low to High' | 'Price: High to Low' | 'Most Popular';

interface FilterOptionsProps {
  onFilterChange?: (filters: {
    category: Category;
    priceRange: PriceRange;
    sortBy: SortOption;
  }) => void;
}

const FilterOptions = ({ onFilterChange }: FilterOptionsProps) => {
  const [category, setCategory] = useState<Category>('All');
  const [priceRange, setPriceRange] = useState<PriceRange>('All');
  const [sortBy, setSortBy] = useState<SortOption>('Newest');
  const [isMobileFilterVisible, setIsMobileFilterVisible] = useState(false);

  const handleCategoryChange = (newCategory: Category) => {
    setCategory(newCategory);
    handleFilterChange(newCategory, priceRange, sortBy);
  };

  const handlePriceRangeChange = (newPriceRange: PriceRange) => {
    setPriceRange(newPriceRange);
    handleFilterChange(category, newPriceRange, sortBy);
  };

  const handleSortChange = (newSortOption: SortOption) => {
    setSortBy(newSortOption);
    handleFilterChange(category, priceRange, newSortOption);
  };

  const handleFilterChange = (
    categoryVal: Category,
    priceRangeVal: PriceRange,
    sortByVal: SortOption
  ) => {
    if (onFilterChange) {
      onFilterChange({
        category: categoryVal,
        priceRange: priceRangeVal,
        sortBy: sortByVal,
      });
    }
  };

  const categories: Category[] = ['All', 'Living Room', 'Bedroom', 'Dining', 'Office', 'Outdoor'];
  const priceRanges: PriceRange[] = ['All', 'Under $100', '$100-$500', '$500-$1000', 'Over $1000'];
  const sortOptions: SortOption[] = [
    'Newest',
    'Price: Low to High',
    'Price: High to Low',
    'Most Popular',
  ];

  return (
    <div className="w-full">
      {/* Desktop Filter */}
      <div className="hidden md:flex justify-between items-center bg-white rounded-lg p-4 shadow-sm">
        <div className="flex space-x-6">
          <div className="flex flex-col">
            <span className="text-xs text-decor-secondary mb-1">Category</span>
            <div className="relative group">
              <button className="flex items-center text-sm font-medium text-decor-primary">
                {category} <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md p-2 z-10 min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className={`block w-full text-left px-3 py-2 text-sm rounded-md ${
                      category === cat
                        ? 'bg-decor-accent/10 text-decor-accent'
                        : 'text-decor-primary hover:bg-decor-light'
                    }`}
                    onClick={() => handleCategoryChange(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-xs text-decor-secondary mb-1">Price Range</span>
            <div className="relative group">
              <button className="flex items-center text-sm font-medium text-decor-primary">
                {priceRange} <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md p-2 z-10 min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {priceRanges.map((range) => (
                  <button
                    key={range}
                    className={`block w-full text-left px-3 py-2 text-sm rounded-md ${
                      priceRange === range
                        ? 'bg-decor-accent/10 text-decor-accent'
                        : 'text-decor-primary hover:bg-decor-light'
                    }`}
                    onClick={() => handlePriceRangeChange(range)}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <span className="text-xs text-decor-secondary mb-1">Sort By</span>
          <div className="relative group">
            <button className="flex items-center text-sm font-medium text-decor-primary">
              {sortBy} <ChevronDown className="h-4 w-4 ml-1" />
            </button>
            <div className="absolute top-full right-0 mt-1 bg-white shadow-lg rounded-md p-2 z-10 min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {sortOptions.map((option) => (
                <button
                  key={option}
                  className={`block w-full text-left px-3 py-2 text-sm rounded-md ${
                    sortBy === option
                      ? 'bg-decor-accent/10 text-decor-accent'
                      : 'text-decor-primary hover:bg-decor-light'
                  }`}
                  onClick={() => handleSortChange(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filter */}
      <div className="md:hidden">
        <Button
          variant="outline"
          className="w-full flex items-center justify-between border-decor-gray-light"
          onClick={() => setIsMobileFilterVisible(!isMobileFilterVisible)}
        >
          <span>Filter & Sort</span>
          <Sliders className="h-4 w-4" />
        </Button>

        {isMobileFilterVisible && (
          <div className="bg-white rounded-lg mt-2 p-4 shadow-sm border border-decor-gray-light animate-slideUp">
            <div className="space-y-4">
              <div>
                <label className="text-xs text-decor-secondary block mb-1">Category</label>
                <select
                  value={category}
                  onChange={(e) => handleCategoryChange(e.target.value as Category)}
                  className="w-full border border-decor-gray-light rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-decor-accent/50"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs text-decor-secondary block mb-1">Price Range</label>
                <select
                  value={priceRange}
                  onChange={(e) => handlePriceRangeChange(e.target.value as PriceRange)}
                  className="w-full border border-decor-gray-light rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-decor-accent/50"
                >
                  {priceRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs text-decor-secondary block mb-1">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => handleSortChange(e.target.value as SortOption)}
                  className="w-full border border-decor-gray-light rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-decor-accent/50"
                >
                  {sortOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterOptions;
