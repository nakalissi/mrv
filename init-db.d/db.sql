CREATE TABLE leads (
    id SERIAL PRIMARY KEY,
    contact_first_name VARCHAR(100) NOT NULL,
    contact_full_name VARCHAR(200),
    contact_phone VARCHAR(20),
    contact_email VARCHAR(150),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    suburb VARCHAR(100),
    category VARCHAR(100),
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    status VARCHAR(20) CHECK (status IN ('new', 'accepted', 'declined')) NOT NULL
);
