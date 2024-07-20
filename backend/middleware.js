import express from "express";
import cors from "cors";

const middleWare = (app) => {
  console.log("middle ware running");
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
};

export default middleWare;
