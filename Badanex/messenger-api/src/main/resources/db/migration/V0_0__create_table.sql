CREATE SCHEMA IF NOT EXISTS main;

CREATE SEQUENCE IF NOT EXISTS  main.message_id_seq
    START WITH 100
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

CREATE TABLE main.message
(
    id     INTEGER DEFAULT nextval('main.message_id_seq'::regclass)  PRIMARY KEY NOT NULL,
    send_email VARCHAR NOT NULL,
    message    JSONB NOT NULL,
    get_email VARCHAR NOT NULL,
    create_date TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    is_active   VARCHAR(20) NOT NULL
);