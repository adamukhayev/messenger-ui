CREATE SCHEMA  IF NOT EXISTS main;

CREATE SEQUENCE IF NOT EXISTS main.users_id_seq
    START WITH 100
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE TABLE main.users
(
    id   INTEGER DEFAULT nextval('main.users_id_seq'::regclass) NOT NULL,
    username VARCHAR                                           NOT NULL,
    password  VARCHAR                                           NOT NULL,
    enabled   INTEGER                                       NOT NULL,
    PRIMARY KEY (username)
);

CREATE SEQUENCE IF NOT EXISTS main.authorities_id_seq
    START WITH 100
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE TABLE authorities (
    id INTEGER DEFAULT nextval('main.authorities_id_seq') NOT NULL ,
                             username varchar ,
                             authority varchar,
                             FOREIGN KEY (username) references users(username)
) ;

INSERT INTO main.users (username, password, enabled)
VALUES
('zaur', '{bcrypt}zaur', 1),
('elena', '{bcrypt}elena', 1),
('ivan', '{bcrypt}ivan', 1);

INSERT INTO main.authorities (username, authority)
VALUES
('zaur', 'ROLE_EMPLOYEE'),
('elena', 'ROLE_HR'),
('ivan', 'ROLE_HR'),
('ivan', 'ROLE_MANAGER');