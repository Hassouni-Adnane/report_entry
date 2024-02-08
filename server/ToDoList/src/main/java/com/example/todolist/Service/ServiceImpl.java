package com.example.todolist.Service;

import com.example.todolist.Entity.Mylist;
import com.example.todolist.Repository.Repo;
import com.example.todolist.event.Event;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServiceImpl implements ServiceInter{

    @Autowired
    private Repo repo;
    @Override
    public void save(Mylist mylist) {
        repo.save(mylist);
    }

    @Override
    public List<Mylist> showAll() {
        return repo.findAll();
    }

    @Override
    @Transactional
    public void update(Mylist reqMylist, int id) {
        Mylist mylist = repo.findById(id).get();
        if(reqMylist.getTitle()!=null) mylist.setTitle(reqMylist.getTitle());
        if(reqMylist.getReport()!=null) mylist.setReport(reqMylist.getReport());
    }

    @Override
    public void delete(int id) {
        repo.deleteById(id);
    }

    @Override
    public Mylist showById(int id) {
        return repo.findById(id).get();
    }

}
