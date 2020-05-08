package com.ska.portfolio.model;

public class EmailData {
    public String Name;
    public String FromEmail;
    public String Subject;
    public String Message;


    public String getName() {
        return Name;
    }
    public void setName(final String Name) {
        this.Name = Name;
    }
    public String getEmail() {
        return FromEmail;
    }
    public void setEmail(final String Email) {
        this.FromEmail = Email;
    }
    public String getSubject() {
        return Subject;
    }
    public void setSubject(final String Subject) {
        this.Subject = Subject;
    }
    public String getMessage() {
        return Message;
    }
    public void setMessage(final String Message) {
        this.Message = Message;
    }

}
