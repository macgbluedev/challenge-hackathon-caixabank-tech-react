import { Transaction } from '../../../../contexts/neobanks/domain/entities/Transaction';
import { TransactionRepository } from '../../../../contexts/neobanks/domain/repositories/transactionRepository'

export class TranstionRepositoryImpl implements TransactionRepository {
    getTransactions(): Promise<Transaction[]> {
        throw new Error('Method not implemented.');
    }
    
}