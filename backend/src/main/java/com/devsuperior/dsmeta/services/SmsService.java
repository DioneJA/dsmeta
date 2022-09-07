package com.devsuperior.dsmeta.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.devsuperior.dsmeta.entities.Sale;
import com.devsuperior.dsmeta.repositories.SaleRepository;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

@Service
public class SmsService {

	@Value("${twilio.sid}")
	private String twilioSid;

	@Value("${twilio.key}")
	private String twilioKey;

	@Value("${twilio.phone.from}")
	private String twilioPhoneFrom;

	@Value("${twilio.phone.to}")
	private String twilioPhoneTo;

	@Autowired
	private SaleRepository saleRepository;

	public void sendSms(Long saleId) {
		Sale sale = saleRepository.findById(saleId).get();/*Pego a venda pelo id*/
		String date = sale.getDate().getDayOfMonth() + "/" + sale.getDate().getMonthValue() + "/" + sale.getDate().getYear();
		String msgDefault = "\n\nOlá! Tudo bem? Espero que sim!\n"
				+ "Meu nome é Bruno Dionísio Alves, estou apenas testando minha aplicação "
				+ "Spring + React.\nLink no GitHub: https://github.com/DioneJA/dsmeta." + "\nObrigado!";
		
		String msg = "O vendedor " + sale.getSellerName() + " foi destaque em " + date  + ", com um total de R$" + String.format("%.2f",  sale.getAmount())+ "vendidos." + msgDefault;
		Twilio.init(twilioSid, twilioKey);

		PhoneNumber to = new PhoneNumber(twilioPhoneTo);
		PhoneNumber from = new PhoneNumber(twilioPhoneFrom);

		Message message = Message
				.creator(to, from, msg)
				.create();

		System.out.println(message.getSid());
	}
}