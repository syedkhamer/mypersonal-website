package com.ska.portfolio.Controller;

import com.ska.portfolio.Service.EmailService;
import com.ska.portfolio.model.EmailData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.ValidationException;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/api/sendmail"})
public class emailController {

    @Autowired
    private EmailService emailService;


    @PostMapping
    public String sendmail(@RequestBody EmailData emaildata,BindingResult bindingResult) {
        if (bindingResult.hasErrors()){
            throw new ValidationException("Email service has errors; Cannot send Mail. ");
        }
        emailService.sendMail(emaildata.getEmail(),emaildata.getSubject(),emaildata.getMessage());


        return "emailsent";
    }
}

