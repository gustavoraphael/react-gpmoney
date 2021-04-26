import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import closeImg from "../../assets/close.svg";
import inComeImg from "../../assets/income.svg";
import outComeImg from "../../assets/outcome.svg";
import { useState } from "react";

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionsModal({
    isOpen,
    onRequestClose,
}: NewTransactionModalProps) {
    const [type, setType] = useState("deposit");

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            ariaHideApp={false}
        >
            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeImg} alt="Close modal" />
            </button>
            <Container>
                <h2>Transaction Register</h2>

                <input type="text" placeholder="Title" />

                <input type="number" placeholder="Value" />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => setType("deposit")}
                        isActive={type === "deposit"}
                    >
                        <img src={inComeImg} alt="Apptizer" />
                        <span>Apptizer</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => setType("withdraw")}
                        isActive={type === "withdraw"}
                    >
                        <img src={outComeImg} alt="Exits" />
                        <span>Exits</span>
                    </RadioBox>
                </TransactionTypeContainer>
                <input type="text" placeholder="Category" />

                <button type="submit"></button>
            </Container>
        </Modal>
    );
}
