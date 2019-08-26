update product
set name = $1,
 price = $2,
 image_url = $3
where product_id = $4
