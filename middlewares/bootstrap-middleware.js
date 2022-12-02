import logger from 'morgan'
import express from 'express'
import helmet from 'helmet'

module.exports = app => {
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(helmet());
}
