package com.example.todolist.Repository;

import com.example.todolist.Entity.Mylist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Repo extends JpaRepository<Mylist, Integer> {
}
