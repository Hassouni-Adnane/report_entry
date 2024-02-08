package com.example.notification.service;

import com.example.notification.entity.Notification;
import com.example.notification.repo.Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServiceClass implements ServiceInter{
    @Autowired
    private Repo repo;
    @Override
    public void add(Notification notification) {
        repo.save(notification);
    }

    @Override
    public void delete(int id) {
        repo.deleteById(id);
    }

    @Override
    public List<Notification> showAll() {
        return repo.findAll();
    }

    @Override
    public Notification show(int id) {
        return repo.findById(id).get();
    }
}
