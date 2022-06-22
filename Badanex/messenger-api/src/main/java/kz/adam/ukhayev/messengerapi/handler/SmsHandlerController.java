package kz.adam.ukhayev.messengerapi.handler;

import java.text.SimpleDateFormat;
import java.util.Date;
import kz.adam.ukhayev.messengerapi.model.Message;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class SmsHandlerController {

//    @MessageMapping("/hello")
//    @SendTo("/topic/greetings")
//    public Greeting greeting(HelloMessage message) throws Exception {
//        Thread.sleep(1000); // simulated delay
//        return new Greeting("Hello, " + HtmlUtils.htmlEscape(message.getName()) + "!");
//    }

    @MessageMapping("/chat")
    @SendTo("/topic/messages")
    public Message send(Message message ) throws Exception {
        String time = new SimpleDateFormat("HH:mm").format(new Date());
        return new Message(message.getFrom(), message.getText());
    }
}
