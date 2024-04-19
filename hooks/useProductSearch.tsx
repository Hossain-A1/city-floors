"use client";
import { productType } from "@/types/productsType";
import { useState } from "react";

const useProductSearch = (initialProducts: any) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredProduct = initialProducts.filter((item: productType) =>
    item.title.toLowerCase().includes(searchQuery)
  );

  return { searchQuery, handleSearch, filteredProduct };
};

export default useProductSearch;
