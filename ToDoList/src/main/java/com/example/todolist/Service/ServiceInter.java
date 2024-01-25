package com.example.todolist.Service;

import com.example.todolist.Entity.Mylist;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface ServiceInter {
    public void save(Mylist mylist);
    public List<Mylist> showAll();
    public void update(Mylist mylist, int id);

}
