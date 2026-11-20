/* drop table if exists goals; */
drop table if exists notes;
drop table if exists users;

create table users (
    id serial primary key,
    username text unique not null,
    password_hash text not null
);

create table notes (
    id serial primary key,
    user_id int not null references users(id) on delete cascade,
    date date not null,
    title text,
    description text,
    type text not null,
    fields json not null check (json_typeof(fields) = 'array')
);

/* Not in MVP

create table goals (
    id serial primary key,
    user_id int not null references users(id) on delete cascade,
    title text,
    description text,
    duration_start date not null,
    duration_end date not null,
    completed boolean not null
);

*/
