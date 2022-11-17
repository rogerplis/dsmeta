package com.devsuperior.dsmeta.services;

import com.devsuperior.dsmeta.entities.Sale;
import com.devsuperior.dsmeta.repositories.SalesRepository;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SmsServices {

    /*cria as constantes com os dados do Twilio esses dados estao como variaveis de ambiente no sistema hospedado*/
    private final String TWILIO_SID = System.getenv("TWILIO_SID");
    private final String TWILIO_KEY = System.getenv("TWILIO_KEY") ;
    private final String TWILIO_PHONE_FROM = System.getenv("TWILIO_PHONE_FROM") ;

    /*injeção de dependencia da interface SalesRepository */
    @Autowired
    private SalesRepository salesRepository;

    /* Criação do metodo que envia o SMS, passo um numero de telefone e o id da venda
     Futuramente podera ser criado a classe Seller que tera o atributo telefone e ser enviado por esse serviço*/
    public void sendSMS(String tel, Long saleId){
        // recupera a venda pelo id passado.
        Sale sale = salesRepository.findById(saleId).get();
        // pega o mes e o ano da venda
        String date = sale.getDate().getMonthValue() + "/" + sale.getDate().getYear();
        // monta uma mensagem
        String msg = "O vendedor " + sale.getSellerName() + " foi destaque em " + date
                + " com um total de R$ " + String.format("%.2f", sale.getAmount());
        // inicia o Twillio passando o SID e KEY cadastrado no site
        Twilio.init(TWILIO_SID, TWILIO_KEY);
        // seta o numero de destino passando o tel que veio passado
        PhoneNumber to = new PhoneNumber(tel);
        // seta o numero destinatario com o numero gerado no twillio
        PhoneNumber from = new PhoneNumber(TWILIO_PHONE_FROM);
        // cria o objeto messagem passando o destino, o destinario e a msg
        Message message = Message.creator(to, from, msg).create();

        System.out.println(TWILIO_SID);
    }
}
