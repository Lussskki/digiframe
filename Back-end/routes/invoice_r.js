import express from 'express'
import { getInvoices, downloadInvoice } from '../controllers/invoiceControllers.js'
import { authMiddleware } from '../middleware/authMiddleware.js'

const invoiceRouter = express.Router()

invoiceRouter.get('/history', authMiddleware, getInvoices) // Get all invoices
invoiceRouter.get('/download/:id', authMiddleware, downloadInvoice) // Download a specific invoice as PDF

export default invoiceRouter
