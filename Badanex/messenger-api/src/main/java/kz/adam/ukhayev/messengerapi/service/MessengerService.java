package kz.adam.ukhayev.messengerapi.service;

import javax.validation.Valid;
import kz.adam.ukhayev.messengerapi.model.dto.MessageDto;

public interface MessengerService {

    void sendMessage(@Valid MessageDto messageDto);

    MessageDto getMessage(MessageDto message);
}
