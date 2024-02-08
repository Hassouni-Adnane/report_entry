package com.example.notification;

import com.example.notification.entity.Notification;
import com.example.notification.event.Event;
import com.example.notification.repo.Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.kafka.annotation.KafkaListener;

@SpringBootApplication
public class NotificationApplication {

	public static void main(String[] args) {
		SpringApplication.run(NotificationApplication.class, args);}

		@Autowired
		Repo repo;

		@KafkaListener(topics = "notificationTopic")
		public void handleNotification(Event event){
			Notification notification = Notification.builder()
					.description(event.getDesc())
					.title(event.getTitle())
					.date(event.getDate()).build();
			repo.save(notification);
		}

	/*
	* @Autowired
NotificationRepository notificationRepository;
// Méthode annotée avec @KafkaListener pour écouter le topic
"notificationTopic"
@KafkaListener(topics = "notificationTopic")
public void handleNotification(SaleEvent saleEvent){
// Traitement des événements reçus de Kafka
System.out.println("New sale added, Sale ID: " +
saleEvent.getSaleId() + ", Client ID: " + saleEvent.getClientId()
+ ", Product ID: " + saleEvent.getProductId());
// Création d'un objet Notification à sauvegarder en base
de données
Notification notification = Notification.builder()
.notificationId(UUID.randomUUID().toString())
.clientId(saleEvent.getClientId())
.description("New sale added")
.productId(saleEvent.getProductId())
.build();*/

}
