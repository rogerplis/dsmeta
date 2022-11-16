package com.devsuperior.dsmeta.repositories;

import com.devsuperior.dsmeta.entities.Sale;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;

public interface SalesRepository extends JpaRepository<Sale, Long> {

    Page<Sale> findSalesByDateBetweenOrderByAmountDesc(LocalDate min, LocalDate max, Pageable pageable);
}
