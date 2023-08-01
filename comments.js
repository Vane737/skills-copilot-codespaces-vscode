// create web server

// import module
const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');
const { body, validationResult } = require('express-validator');

// create route
router.get('/', commentsController.index);

router.get('/create', commentsController.create);

router.post('/store', [
    body('name').not().isEmpty().withMessage('Name is required'),
    body('email').not().isEmpty().withMessage('Email is required'),
    body('content').not().isEmpty().withMessage('Content is required'),
], commentsController.store);

router.get('/:id/edit', commentsController.edit);

router.post('/update', [
    body('name').not().isEmpty().withMessage('Name is required'),
    body('email').not().isEmpty().withMessage('Email is required'),
    body('content').not().isEmpty().withMessage('Content is required'),
], commentsController.update);

router.get('/:id/delete', commentsController.delete);

// export router
module.exports = router;

// this code is ok