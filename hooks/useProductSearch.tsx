"use client";
import { useState } from "react";

const useProductSearch = (initialProducts: any) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = setSearchQuery((e: any) => e.target.value.toLowerCase());

  const filteredProduct = initialProducts.filter((item: any) =>
    item.name.toLowercas().includes(searchQuery)
  );

  return { searchQuery, handleSearch, filteredProduct };
};

export default useProductSearch;
