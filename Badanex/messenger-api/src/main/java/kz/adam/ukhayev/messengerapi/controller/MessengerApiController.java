package kz.adam.ukhayev.messengerapi.controller;

import javax.validation.Valid;
import kz.adam.ukhayev.messengerapi.model.dto.MessageDto;
import kz.adam.ukhayev.messengerapi.model.dto.ResponseUserDto;
import kz.adam.ukhayev.messengerapi.service.MessengerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/messenger")
@RequiredArgsConstructor
@Validated
public class MessengerApiController {

    private final MessengerService messengerService;

    private final SimpMessagingTemplate messagingTemplate;
//    private final ChatMessageService chatMessageService;
//    private final ChatRoomService chatRoomService;

    @PostMapping
    public ResponseEntity<Void> sendMessage(@RequestBody(required = false) @Valid MessageDto messageDto) {

        messengerService.sendMessage(messageDto);
        return ResponseEntity.ok().build();
    }

//    @MessageMapping("/chat")
//    public void processMessage(@Payload ChatMessage chatMessage) {
//        var chatId = chatRoomService
//                .getChatId(chatMessage.getSenderId(), chatMessage.getRecipientId(), true);
//        chatMessage.setChatId("1L");

//        ChatMessage saved = chatMessageService.save(chatMessage);

//        messagingTemplate.convertAndSendToUser(
//                chatMessage.getRecipientId(),"/queue/messages",
//                new ChatNotification(
//                        saved.getId(),
//                        saved.getSenderId(),
//                        saved.getSenderName()));
//    }
}
