import { test } from "node:test";
import assert from "node:assert/strict";
import { filterProducts, getAvailableSubCategories } from "./catalogFilter";
import { SAMPLE_PRODUCTS } from "../data/products";

test("filterProducts filters by category correctly", () => {
  const gold = filterProducts(SAMPLE_PRODUCTS, {
    category: "Gold",
    subCategory: "all",
    searchQuery: "",
    sortBy: "featured",
  });
  assert.equal(gold.length, 15);
  assert.ok(gold.every((p) => p.category === "Gold"));

  const silver = filterProducts(SAMPLE_PRODUCTS, {
    category: "Silver",
    subCategory: "all",
    searchQuery: "",
    sortBy: "featured",
  });
  assert.equal(silver.length, 15);
  assert.ok(silver.every((p) => p.category === "Silver"));

  const diamond = filterProducts(SAMPLE_PRODUCTS, {
    category: "Diamond",
    subCategory: "all",
    searchQuery: "",
    sortBy: "featured",
  });
  assert.equal(diamond.length, 15);
  assert.ok(diamond.every((p) => p.category === "Diamond"));

  const bridal = filterProducts(SAMPLE_PRODUCTS, {
    category: "Bridal",
    subCategory: "all",
    searchQuery: "",
    sortBy: "featured",
  });
  assert.equal(bridal.length, 15);
  assert.ok(bridal.every((p) => p.category === "Bridal"));
});

test("filterProducts searches in English and Gujarati", () => {
  // English search
  const mayura = filterProducts(SAMPLE_PRODUCTS, {
    category: "all",
    subCategory: "all",
    searchQuery: "Mayura",
    sortBy: "featured",
  });
  assert.ok(mayura.length > 0);
  assert.equal(mayura[0].id, "SJ-GLD-101");

  // Gujarati search (મયૂર / સોનું)
  const gujSearch = filterProducts(SAMPLE_PRODUCTS, {
    category: "all",
    subCategory: "all",
    searchQuery: "મયૂર",
    sortBy: "featured",
  });
  assert.ok(gujSearch.length > 0);
  assert.ok(gujSearch.some((p) => p.id === "SJ-GLD-101"));
});

test("getAvailableSubCategories extracts distinct subcategories", () => {
  const subCats = getAvailableSubCategories(SAMPLE_PRODUCTS, "Gold");
  assert.ok(subCats.includes("Necklace"));
  assert.ok(subCats.includes("Bangles"));
  assert.ok(subCats.includes("Ring"));
});
