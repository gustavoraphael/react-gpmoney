import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionsTable(){
  useEffect(() => {
    fetch('localhost:3000/api/transactions')
    .then(response => response.json())
    .then(data => console.log(data)
    )
    
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <th>Title</th>
          <th>Value</th>
          <th>Category</th>
          <th>Date</th>
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

  )
}