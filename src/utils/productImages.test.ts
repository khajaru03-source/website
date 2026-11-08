import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { SAMPLE_PRODUCTS } from '../data/products';

test('Product Catalogue Integrity & Zero Duplicate Images Audit', async (t) => {
  await t.test('Total product count is exactly 60', () => {
    assert.equal(SAMPLE_PRODUCTS.length, 60, `Expected 60 products, got ${SAMPLE_PRODUCTS.length}`);
  });

  await t.test('Strict category breakdown: 15 Gold, 15 Silver, 15 Diamond, 15 Bridal', () => {
    const gold = SAMPLE_PRODUCTS.filter((p) => p.category === 'Gold');
    const silver = SAMPLE_PRODUCTS.filter((p) => p.category === 'Silver');
    const diamond = SAMPLE_PRODUCTS.filter((p) => p.category === 'Diamond');
    const bridal = SAMPLE_PRODUCTS.filter((p) => p.category === 'Bridal');

    assert.equal(gold.length, 15, `Expected 15 Gold products, got ${gold.length}`);
    assert.equal(silver.length, 15, `Expected 15 Silver products, got ${silver.length}`);
    assert.equal(diamond.length, 15, `Expected 15 Diamond products, got ${diamond.length}`);
    assert.equal(bridal.length, 15, `Expected 15 Bridal products, got ${bridal.length}`);
  });

  await t.test('ZERO duplicate primary image assignments across all 60 products', () => {
    const images = SAMPLE_PRODUCTS.map((p) => p.primaryImage);
    const uniqueImages = new Set(images);

    assert.equal(
      uniqueImages.size,
      60,
      `Duplicate images detected! Expected 60 unique images, got ${uniqueImages.size}. Duplicates: ${images.filter((img, i) => images.indexOf(img) !== i).join(', ')}`
    );
  });

  await t.test('Strict Category Image Path Separation', () => {
    SAMPLE_PRODUCTS.forEach((p) => {
      if (p.category === 'Gold') {
        assert.ok(
          p.primaryImage.includes('/assets/products/gold/'),
          `Gold product ${p.id} must have image in /assets/products/gold/, got ${p.primaryImage}`
        );
      } else if (p.category === 'Silver') {
        assert.ok(
          p.primaryImage.includes('/assets/products/silver/'),
          `Silver product ${p.id} must have image in /assets/products/silver/, got ${p.primaryImage}`
        );
      } else if (p.category === 'Diamond') {
        assert.ok(
          p.primaryImage.includes('/assets/products/diamond/'),
          `Diamond product ${p.id} must have image in /assets/products/diamond/, got ${p.primaryImage}`
        );
      } else if (p.category === 'Bridal') {
        assert.ok(
          p.primaryImage.includes('/assets/products/bridal/'),
          `Bridal product ${p.id} must have image in /assets/products/bridal/, got ${p.primaryImage}`
        );
      }
    });
  });

  await t.test('Every primary image asset file physically exists on disk and is non-empty', () => {
    SAMPLE_PRODUCTS.forEach((p) => {
      // Images are stored in public/assets/... and served at /assets/...
      const relativePath = p.primaryImage.startsWith('/') ? p.primaryImage.slice(1) : p.primaryImage;
      const diskPath = path.resolve(process.cwd(), 'public', relativePath);
      
      assert.ok(
        fs.existsSync(diskPath),
        `Image file for product ${p.id} does not exist at ${diskPath}`
      );

      const stats = fs.statSync(diskPath);
      assert.ok(
        stats.size > 50000,
        `Image file for product ${p.id} is too small (${stats.size} bytes). Expected full-resolution image.`
      );
    });
  });

  await t.test('Product naming and subcategory matching specifications', () => {
    // Gold specific items check
    const goldTypes = [
      'Necklace', 'Choker', 'Earrings', 'Earrings', 'Bangles',
      'Kada', 'Ring', 'Bracelet', 'Chain', 'Pendant',
      'Bridal Set', 'Necklace', 'Nose Ring', 'Mangalsutra', 'Anklet'
    ];
    const goldProducts = SAMPLE_PRODUCTS.filter((p) => p.category === 'Gold');
    goldProducts.forEach((p, index) => {
      assert.equal(
        p.subCategory,
        goldTypes[index],
        `Gold item ${index + 1} (${p.id}) subcategory expected ${goldTypes[index]}, got ${p.subCategory}`
      );
    });

    // Silver specific items check
    const silverTypes = [
      'Necklace', 'Earrings', 'Earrings', 'Ring', 'Bracelet',
      'Anklet', 'Chain', 'Kada', 'Pendant', 'Toe Rings',
      'Bangles', 'Necklace', 'Bridal Set', 'Earrings', 'Bridal Set'
    ];
    const silverProducts = SAMPLE_PRODUCTS.filter((p) => p.category === 'Silver');
    silverProducts.forEach((p, index) => {
      assert.equal(
        p.subCategory,
        silverTypes[index],
        `Silver item ${index + 1} (${p.id}) subcategory expected ${silverTypes[index]}, got ${p.subCategory}`
      );
    });
  });

  await t.test('Bilingual metadata integrity and compliant pricing', () => {
    SAMPLE_PRODUCTS.forEach((p) => {
      assert.ok(p.name && p.name.length > 3, `Product ${p.id} missing English name`);
      assert.ok(p.nameGu && p.nameGu.length > 3, `Product ${p.id} missing Gujarati name`);
      assert.ok(p.tagline && p.tagline.length > 3, `Product ${p.id} missing English tagline`);
      assert.ok(p.taglineGu && p.taglineGu.length > 3, `Product ${p.id} missing Gujarati tagline`);
      assert.ok(p.description && p.description.length > 10, `Product ${p.id} missing English description`);
      assert.ok(p.descriptionGu && p.descriptionGu.length > 10, `Product ${p.id} missing Gujarati description`);
      assert.equal(p.priceDisplay, 'Enquire for Price');
      assert.equal(p.priceDisplayGu, 'ભાવ માટે પૂછપરછ કરો');
    });
  });
});
