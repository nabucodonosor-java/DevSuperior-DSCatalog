package com.devsuperior.dscatalog.tests.factory;

import java.time.Instant;

import com.devsuperior.dscatalog.dto.ProductDto;
import com.devsuperior.dscatalog.entities.Product;

public class ProductFactory {
	
	public static Product createProduct() {
		return new Product(1L, "Phone", "Good phone", 800.0, "https://img.com/img.png", Instant.parse("2021-10-20T03:00:00Z"));
	}
	
	public static ProductDto createProductDto() {
		return new ProductDto(createProduct());
	}

}
