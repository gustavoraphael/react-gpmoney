import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionsModal } from "./components/NewTransactionModal";
import { useState } from "react";
import { TransactionsProvider } from './hooks/useTransactions'

export function App() {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
        false
    );

    function handleOpenNewTransactionModalOpen(){
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModalOpen(){
        setIsNewTransactionModalOpen(false);
    }

    return (
        <TransactionsProvider>
            <Header onOpenNewTransacionModal={handleOpenNewTransactionModalOpen}/>
            <Dashboard />

            <NewTransactionsModal 
                isOpen={isNewTransactionModalOpen}
                onRequestClose={handleCloseNewTransactionModalOpen}
                />
            <GlobalStyle />
        </TransactionsProvider>
    );
}
