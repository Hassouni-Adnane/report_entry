package com.example.notification.service;

import com.example.notification.entity.Notification;

import java.util.List;

public interface ServiceInter {

    public void add(Notification notification);
    public void delete(int id);
    public List<Notification> showAll();
    public Notification show(int id);
}
