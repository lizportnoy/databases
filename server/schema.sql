CREATE DATABASE chat;

USE chat;

CREATE TABLE Messages (
  /* Describe your table here.*/
  MessageID INTEGER PRIMARY KEY,
  Message VARCHAR(400) NOT NULL
);

/* Create other tables and define schemas for them here! */
CREATE TABLE Users (
  UserID INTEGER PRIMARY KEY,
  Username VARCHAR(50) NOT NULL
);

CREATE TABLE Rooms (
  RoomID INTEGER PRIMARY KEY,
  Text VARCHAR(50) NOT NULL
);

CREATE TABLE Mapping (
  MappingID INTEGER PRIMARY KEY,
  UserId INTEGER NOT NULL,
  ExamId INTEGER NOT NULL,
  Score NUMERIC NOT NULL,
  FOREIGN KEY(StudentId) REFERENCES Student(StudentId),
  FOREIGN KEY(ExamId) REFERENCES Exam(ExamId)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

