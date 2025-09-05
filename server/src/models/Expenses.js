import mongoose from 'mongoose'

const ExpenseSchema = new mongoose.Schema({
  groupId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Group',
    required: true,
  },
  paidBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  splitAmount: { type: Number, required: true },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
})

const Expense = mongoose.model('Expense', ExpenseSchema)
export default Expense
