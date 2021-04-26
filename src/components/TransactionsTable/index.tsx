import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
    useEffect(() => {
        api.get("transactions").then((response) => console.log(response.data));
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Value</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Website development</td>
                        <td className="deposit">R$1200</td>
                        <td>Home</td>
                        <td>2020/05/22</td>
                    </tr>

                    <tr>
                        <td>Website development</td>
                        <td className="withdrawl">- R$100</td>
                        <td>Home</td>
                        <td>2020/05/22</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}
