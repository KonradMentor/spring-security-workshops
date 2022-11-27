package com.example.springsecurityworkshop01.message;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "Message not found")
public class MessageNotFound extends RuntimeException {
}
