package com.devsuperior.dsmeta.services;

import com.devsuperior.dsmeta.entities.Sale;
import com.devsuperior.dsmeta.repositories.SalesRepository;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class SmsServices {


    private String TWILIO_SID = System.getenv("TWILIO_SID");

    private String TWILIO_KEY = System.getenv("TWILIO_KEY") ;
    private String TWILIO_PHONE_FROM = System.getenv("TWILIO_PHONE_FROM") ;

    @Autowired
    private SalesRepository salesRepository;

    public void sendSMS(String tel, Long saleId){
        Sale sale = salesRepository.findById(saleId).get();
        String date = sale.getDate().getMonthValue() + "/" + sale.getDate().getYear();
        String msg = "O vendedor " + sale.getSellerName() + " foi destaque em " + date
                + " com um total de R$ " + String.format("%.2f", sale.getAmount());
        Twilio.init(TWILIO_SID, TWILIO_KEY);
        PhoneNumber to = new PhoneNumber(tel);
        String twilioPhoneFrom = TWILIO_PHONE_FROM;
        PhoneNumber from = new PhoneNumber(twilioPhoneFrom);

        Message message = Message.creator(to, from, msg).create();

        System.out.println(TWILIO_SID);
    }
}
