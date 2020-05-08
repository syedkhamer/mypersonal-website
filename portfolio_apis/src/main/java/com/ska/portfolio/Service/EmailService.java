package com.ska.portfolio.Service;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
    private JavaMailSender javaMailSender;

    public EmailService(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    public void sendMail(String fromEmail, String subject, String message) {

        var mailMessage = new SimpleMailMessage();

        mailMessage.setTo("syed.ouce@gmail.com");
        mailMessage.setSubject(subject);
        String full_message=fromEmail+"\n"+message;
        mailMessage.setText(full_message);

        mailMessage.setFrom(fromEmail);

        javaMailSender.send(mailMessage);
    }
}
