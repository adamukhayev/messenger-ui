package kz.adam.ukhayev.messengerapi.repository;

import kz.adam.ukhayev.messengerapi.model.entity.MessageEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MessengerRepository extends JpaRepository<MessageEntity, Long> {

    MessageEntity findBySendEmailAndGetEmail(String name, String getEmail);
}
