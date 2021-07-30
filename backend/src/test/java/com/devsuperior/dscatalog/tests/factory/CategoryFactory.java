package com.devsuperior.dscatalog.tests.factory;

import com.devsuperior.dscatalog.dto.CategoryDto;
import com.devsuperior.dscatalog.entities.Category;

public class CategoryFactory {
	
	public static Category createCategory(Long id, String name) {
		return new Category(id, name);
	}
	
	public static CategoryDto createCategoryDto(Long id, String name) {
		return new CategoryDto(createCategory(id, name));
	}

}
