package com.example.springsecurityworkshop01.message;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@CrossOrigin
@RestController
@RequestMapping("api/v1/message")
public class MessageController {
    private final MessageService messageService;

    public MessageController(MessageService messageService) {
        this.messageService = messageService;
    }

    @GetMapping("/{id}")
    public MessageRestDTO provideMessageById(@PathVariable UUID id) {
        return messageService.provideMessageById(id);
    }

    @GetMapping
    public Iterable<MessageRestDTO> provideAllMessages() {
        return messageService.provideAllMessages();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public MessageRestDTO saveMessage(@RequestBody MessageRestDTO message) {
        return messageService.saveMessage(message);
    }
}
