package com.tropicalbastos.imggallery.controller;

import java.util.List;
import com.tropicalbastos.imggallery.model.Image;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;
import com.tropicalbastos.imggallery.repository.ImageRepository;

@RestController
public class MainController {

    @Autowired
    ImageRepository imageRepo;

    @RequestMapping(value="/images", method=RequestMethod.GET)
    public List<Image> getImages() {
        return (List<Image>) imageRepo.findAll();
    }

}
