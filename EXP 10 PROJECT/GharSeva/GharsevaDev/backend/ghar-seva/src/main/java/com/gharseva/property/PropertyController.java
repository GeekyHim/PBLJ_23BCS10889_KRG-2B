package com.gharseva.property;

import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class PropertyController {

    private final PropertyService propertyService;

    public PropertyController(PropertyService propertyService) {
        this.propertyService = propertyService;
    }

    // Public listing for Home page
    @GetMapping("/properties")
    public ResponseEntity<List<Property>> listProperties() {
        return ResponseEntity.ok(propertyService.getAllProperties());
    }

    // ✅ New endpoint: Get single property by ID
    @GetMapping("/properties/{id}")
    public ResponseEntity<Property> getPropertyById(@PathVariable Long id) {
        return ResponseEntity.ok(propertyService.getPropertyById(id));
    }

    // Admin add
    @PostMapping("/admin/properties")
    public ResponseEntity<Property> createProperty(@Valid @RequestBody Property property) {
        Property saved = propertyService.saveProperty(property);
        return ResponseEntity.ok(saved);
    }
}
