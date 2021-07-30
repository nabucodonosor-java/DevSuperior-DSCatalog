package com.devsuperior.dscatalog.tests.repositories;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import com.devsuperior.dscatalog.entities.Category;
import com.devsuperior.dscatalog.entities.Product;
import com.devsuperior.dscatalog.repositories.ProductRepository;
import com.devsuperior.dscatalog.tests.factory.CategoryFactory;
import com.devsuperior.dscatalog.tests.factory.ProductFactory;

@DataJpaTest
public class ProductRepositoryTests {
	
	@Autowired
	private ProductRepository repository;
	
	private long existingId;
	private long nonExistingId;
	private long countTotalProducts;
	private long countPCGamerProducts;
	private long countProductsInCategoryBooks;
	private long countProductsInCategoryElectronics;
	PageRequest pageRequest;
	
	@BeforeEach
	void setUp() throws Exception {
		existingId = 1L;
		nonExistingId = 9999L;
		countTotalProducts = 25L;
		countPCGamerProducts = 21L;
		countProductsInCategoryBooks = 1L;
		countProductsInCategoryElectronics = 2L;
		pageRequest = PageRequest.of(0,  10);
	}
	
	@Test
	public void findShouldReturnCategoryWhenOnlyCategoryElectronicsSelected() {
		
		Category electronics = CategoryFactory.createCategory(2L, "Electronics");
		
		List<Category> list = new ArrayList<>();
		
		list.add(electronics);
		
		Page<Product> result = repository.find(list, "", pageRequest);
		
		Assertions.assertFalse(result.isEmpty());
		Assertions.assertEquals(countProductsInCategoryElectronics, result.getTotalElements());
	}
	
	@Test
	public void findShouldReturnCategoryWhenOnlyCategoryBooksSelected() {
		
		Category books = CategoryFactory.createCategory(1L, "Books");
		
		List<Category> list = new ArrayList<>();
		
		list.add(books);
		
		Page<Product> result = repository.find(list, "", pageRequest);
		
		Assertions.assertFalse(result.isEmpty());
		Assertions.assertEquals(countProductsInCategoryBooks, result.getTotalElements());
	}
	
	@Test
	public void findShouldReturnCategoryWhenAllCategorySelected() {
		
		Category books = CategoryFactory.createCategory(1L, "Books");
		Category electronics = CategoryFactory.createCategory(2L, "Electronics");
		Category computers = CategoryFactory.createCategory(3L, "Computers");
		
		List<Category> list = new ArrayList<>();
		
		list.add(books);
		list.add(electronics);
		list.add(computers);
		
		Page<Product> result = repository.find(list, "", pageRequest);
		
		Assertions.assertFalse(result.isEmpty());
		Assertions.assertEquals(countTotalProducts, result.getTotalElements());
	}
	
	@Test
	public void findShouldReturnAllProductsWhenNameIsEmptyOrBlank() {
		
		String name = "   ";
		
		Page<Product> result = repository.find(null, name.trim(), pageRequest);
		
		Assertions.assertFalse(result.isEmpty());
		Assertions.assertEquals(countTotalProducts, result.getTotalElements());
	}
	
	@Test
	public void findShouldReturnProductsWhenNameExistsIgnoringCase() {
		
		String name = "pc GaMer";
		
		Page<Product> result = repository.find(null, name, pageRequest);
		
		Assertions.assertFalse(result.isEmpty());
		Assertions.assertEquals(countPCGamerProducts, result.getTotalElements());
	}
	
	@Test
	public void findShouldReturnProductsWhenNameExists() {
		
		String name = "PC Gamer";
		
		Page<Product> result = repository.find(null, name, pageRequest);
		
		Assertions.assertFalse(result.isEmpty());
		Assertions.assertEquals(countPCGamerProducts, result.getTotalElements());
	}
	
	@Test
	public void saveShouldPersistWithAutoincrementWhenIdIsNull() {
		Product product = ProductFactory.createProduct();
		product.setId(null);
		
		product = repository.save(product);
		Optional<Product> result = repository.findById(product.getId());
		
		Assertions.assertNotNull(result);
		Assertions.assertTrue(result.isPresent());
		Assertions.assertEquals(countTotalProducts + 1L, product.getId());
		Assertions.assertSame(result.get(), product);
	}
	
	@Test
	public void deleteShouldDeleteObjectWhenIdExists() {
		
		repository.deleteById(existingId);
		
		Optional<Product> result = repository.findById(existingId);
		
		Assertions.assertFalse(result.isPresent());
		Assertions.assertTrue(result.isEmpty());
	}
	
	@Test
	public void deleteShouldThrowEmptyResultDataAccessExceptionWhenIdDoesNotExist() {
		
		Assertions.assertThrows(EmptyResultDataAccessException.class, () -> {
			repository.deleteById(nonExistingId);
		});
	}
}
