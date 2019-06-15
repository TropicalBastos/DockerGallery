package com.tropicalbastos.imggallery.repository;

import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;
import com.tropicalbastos.imggallery.model.Image;

@Repository
public interface ImageRepository extends CrudRepository<Image, Long> {

}