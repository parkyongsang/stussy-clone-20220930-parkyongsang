package com.stussy.stussyclone20220930yongsang.repository;

import com.stussy.stussyclone20220930yongsang.domain.CollectionsProduct;
import com.stussy.stussyclone20220930yongsang.domain.PaymentProduct;
import com.stussy.stussyclone20220930yongsang.domain.Product;
import com.stussy.stussyclone20220930yongsang.dto.CollectionListRespDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Mapper
public interface ProductRepository {
    public List<CollectionsProduct> getProductList(Map<String, Object> map) throws Exception;

    public Product getProduct(int pdt_id) throws Exception;
    public PaymentProduct getPaymentProduct(int pdtDtlId) throws Exception;
}
