CREATE DATABASE chat;

USE chat;

CREATE TABLE Users (
  UserID INTEGER PRIMARY KEY,
  username VARCHAR(50) NOT NULL
);

CREATE TABLE Rooms (
  RoomID INTEGER PRIMARY KEY,
  roomname VARCHAR(50) NOT NULL
);

CREATE TABLE Messages (
  MessageID INTEGER PRIMARY KEY,
  objectID INTEGER NOT NULL,
  message VARCHAR(400) NOT NULL,
  createdAt TIMESTAMP NOT NULL,
  UserID INTEGER,
  RoomID INTEGER,
  FOREIGN KEY (UserID) REFERENCES Users (UserID),
  FOREIGN KEY (RoomID) REFERENCES Rooms (RoomID)
);
