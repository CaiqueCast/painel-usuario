create database informacoes_pessoais;


create table usuarios ( id serial primary key, nome text not null, idade integer not null, rua text not null, bairro text not null, estado text not null, biografia text not null);

