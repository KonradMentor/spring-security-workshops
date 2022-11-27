package com.example.springsecurityworkshop01.message;

import java.util.UUID;

public class MessageRestDTO {
    private UUID id;

    private String title;

    private String content;

    public MessageRestDTO(UUID id, String title, String content) {
        this.id = id;
        this.title = title;
        this.content = content;
    }

    public MessageRestDTO() {
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public UUID getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getContent() {
        return content;
    }
}
