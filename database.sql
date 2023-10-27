CREATE DATABASE jwttutorial;

CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT ,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
)