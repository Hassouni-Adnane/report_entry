package com.example.todolist.Web;

import com.example.todolist.Entity.Mylist;
import com.example.todolist.Service.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/report")
public class Brain {

    @Autowired
    private ServiceImpl serviceImpl;

    @PostMapping("/add")
    public String add(@RequestBody Mylist mylist){
        mylist.setDate(new Date());
        serviceImpl.save(mylist);
        return "New Entry:"+mylist.getDate();
    }

    @GetMapping("/show")
    public List<Mylist> show(){
        return serviceImpl.showAll();
    }

    @PutMapping("/edit/{id}")
    public void update(@PathVariable("id") int id,@RequestBody Mylist mylist){
        serviceImpl.update(mylist, id);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable("id") int id){
        serviceImpl.delete(id);
    }

    @GetMapping("show/{id}")
    public Mylist showById(@PathVariable("id") int id){
        return serviceImpl.showById(id);
    }

}
