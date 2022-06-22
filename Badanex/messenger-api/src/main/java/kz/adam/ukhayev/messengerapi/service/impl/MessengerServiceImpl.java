package kz.adam.ukhayev.messengerapi.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.time.LocalDateTime;
import java.util.Optional;
import javax.validation.Valid;
import kz.adam.ukhayev.messengerapi.model.Message;
import kz.adam.ukhayev.messengerapi.model.MessageType;
import kz.adam.ukhayev.messengerapi.model.Status;
import kz.adam.ukhayev.messengerapi.model.dto.MessageDto;
import kz.adam.ukhayev.messengerapi.model.entity.MessageEntity;
import kz.adam.ukhayev.messengerapi.repository.MessengerRepository;
import kz.adam.ukhayev.messengerapi.service.MessengerService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MessengerServiceImpl implements MessengerService {

    private final MessengerRepository messengerRepository;
    private final ObjectMapper mapper;

    @Override
    public void sendMessage(@Valid MessageDto messageDto) {

        var entity = mapper.convertValue(messageDto, MessageEntity.class);
        entity.setSendEmail(SecurityContextHolder.getContext().getAuthentication().getName());
        entity.setCreateDate(LocalDateTime.now());
        entity.setIsActive(Status.ACTIVE);
        messengerRepository.save(entity);
    }

    @Override
    public MessageDto getMessage(MessageDto message) {

//        Message message1 = new Message();
//        message1.setMessage("AAAA");
//        message1.setMessageType(MessageType.SMS);
//        MessageDto m = new MessageDto();
//        m.setMessage(message1);
//        m.setGetEmail("salamo@mail.ru");
        return null;
//       return Optional.ofNullable(messengerRepository
//                .findBySendEmailAndGetEmail(SecurityContextHolder
//                        .getContext().getAuthentication().getName(),
//                        message.getGetEmail()))
//                .map(messageEntity -> mapper.convertValue(messageEntity, MessageDto.class))
//                .orElse(null);
    }
}
