package com.devsuperior.dscatalog.tests.factory;

import java.util.ArrayList;
import java.util.List;

import com.devsuperior.dscatalog.dto.CategoryDto;
import com.devsuperior.dscatalog.entities.Category;

public class CategoryFactory {

	public static Category createCategory(Long id, String name) {
		return new Category(id, name);
	}

	public static CategoryDto createCategoryDto(Long id, String name) {
		return new CategoryDto(createCategory(id, name));
	}

	public static List<Category> createListWithAllCategories() {

		Category books = CategoryFactory.createCategory(1L, "Books");
		Category electronics = CategoryFactory.createCategory(2L, "Electronics");
		Category computers = CategoryFactory.createCategory(3L, "Computers");

		List<Category> list = new ArrayList<>();

		list.add(books);
		list.add(electronics);
		list.add(computers);

		return list;
	}

	public static List<Category> createListWithBooksCategoriesOnly() {

		Category books = CategoryFactory.createCategory(1L, "Books");

		List<Category> list = new ArrayList<>();

		list.add(books);

		return list;
	}
	
	public static List<Category> createListWithElectronicasCategoriesOnly() {

		Category electronics = CategoryFactory.createCategory(2L, "Electronics");

		List<Category> list = new ArrayList<>();

		list.add(electronics);

		return list;
	}
	
	public static List<Category> createListWithComputersCategoriesOnly() {

		Category computers = CategoryFactory.createCategory(3L, "Computers");

		List<Category> list = new ArrayList<>();

		list.add(computers);

		return list;
	}

}
