Use SQL to fetch the following data from the database:

1. All the items.

SELECT item_name FROM items

![Table](table1.png)


2. All the items with a price above 80 (80 not included).

SELECT item_name, price FROM items
WHERE price > 80
![Table](table2.png)




3. All the items with a price below 300. (300 included)

SELECT item_name, price FROM items
WHERE price < 300

![Table](table3.png)


4. All customers whose last name is ‘Smith’ (What will be your outcome?).

![Table](table4.png)


5. All customers whose last name is ‘Jones’.

![Table](table5.png)

6. All customers whose firstname is not ‘Scott’.

![Table](table6.png)
