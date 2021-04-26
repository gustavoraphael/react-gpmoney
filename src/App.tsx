import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionsModal } from "./components/NewTransactionModal";
import { useState } from "react";

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
        <>
            <Header onOpenNewTransacionModal={handleOpenNewTransactionModalOpen}/>
            <Dashboard />

            <NewTransactionsModal 
                isOpen={isNewTransactionModalOpen}
                onRequestClose={handleCloseNewTransactionModalOpen}
                />
            <GlobalStyle />
        </>
    );
}
