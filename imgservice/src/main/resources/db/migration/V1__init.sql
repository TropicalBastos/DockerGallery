CREATE TABLE image (
    id INT AUTOINCREMENT PRIMARY KEY,
    path VARCHAR(255)
);

INSERT INTO image (path) VALUES
    ("https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"),
    ("https://cdn.pixabay.com/photo/2016/12/17/14/33/wave-1913559_960_720.jpg"),
    ("https://img.newatlas.com/juno-jupiter-15.jpg?auto=format%2Ccompress&ch=Width%2CDPR&fit=crop&h=347&q=60&rect=0%2C0%2C1918%2C1078&w=616&s=4492cd21f7e6d8e7b826d4e23a2198d2"),
    ("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkbepTaykg3TzNIQYMl6KyvfVd3rThqmEULppDIZXJaARof_BCJA")
;