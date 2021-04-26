import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from 'miragejs'
import { App } from "./App";

createServer({
    models: {
        transaction: Model,
    },

    seeds(server) {
        server.db.loadData({
            transactions: {
                id: 1,
                title: 'Transactions 1',
                amount: 465,
                type: 'deposito',
                category: 'Food',
                createdAt: new Date()
            }
        })
    },

    routes() {
        this.namespace = 'api';

        this.get('/transactions', () => {
            return this.schema.all('transaction');
        })
    }
})

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
