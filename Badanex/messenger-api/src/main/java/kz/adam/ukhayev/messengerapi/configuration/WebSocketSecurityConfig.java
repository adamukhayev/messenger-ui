package kz.adam.ukhayev.messengerapi.configuration;

import static org.springframework.messaging.simp.SimpMessageType.CONNECT;
import static org.springframework.messaging.simp.SimpMessageType.DISCONNECT;
import static org.springframework.messaging.simp.SimpMessageType.UNSUBSCRIBE;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.messaging.MessageSecurityMetadataSourceRegistry;
import org.springframework.security.config.annotation.web.socket.AbstractSecurityWebSocketMessageBrokerConfigurer;

@Configuration
@RequiredArgsConstructor
public class WebSocketSecurityConfig extends AbstractSecurityWebSocketMessageBrokerConfigurer {


    @Override
    protected void configureInbound(
            MessageSecurityMetadataSourceRegistry messages) {
        messages
                .simpDestMatchers("/chat/**").authenticated()
                .simpTypeMatchers(CONNECT, UNSUBSCRIBE, DISCONNECT)
                .permitAll()
                .anyMessage()
                .authenticated();
    }

    @Override
    protected boolean sameOriginDisabled() {
        return true;
    }

}
