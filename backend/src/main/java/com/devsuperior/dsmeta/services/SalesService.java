package com.devsuperior.dsmeta.services;

import com.devsuperior.dsmeta.entities.Sale;
import com.devsuperior.dsmeta.repositories.SalesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Pageable;

import java.time.LocalDate;
import java.util.List;

@Service
public class SalesService {

    @Autowired
    private SalesRepository repository;

    public Page<Sale> findSales(String minDate, String maxDate, Pageable pageable ){

        LocalDate today = LocalDate.now();
        LocalDate min = minDate.equals("") ? today.minusYears(1) : LocalDate.parse(minDate);
        LocalDate max = maxDate.equals("") ? today : LocalDate.parse(maxDate);
        return repository.findSalesByDateBetweenOrderByAmountDesc(min, max, pageable);

    }
}
