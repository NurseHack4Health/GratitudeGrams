CREATE TABLE hospitals (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR NOT NULL,
  alt_name VARCHAR,
  address VARCHAR,
  city VARCHAR,
  county VARCHAR,
  state VARCHAR,
  country VARCHAR,
  zip NUMERIC,
  type VARCHAR,
  population NUMERIC,
  latitude NUMERIC,
  longitude NUMERIC
);