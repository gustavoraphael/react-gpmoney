import styled from "styled-components";

export const Container = styled.header`
    margin-top: 4rem;

    table {
        width: 100%;
        border-spacing: 0 0.5rem;

        th {
            font-weight: 400;
            color: var(--text-body);
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td {
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            border-radius: 0.25rem;

            //pega o primeiro td e aplica 
            &:first-child {
                color: var(--text-title)
            }

            &.withdrawl {
                color: var(--red)
            }

            &.deposit {
                color: var(--green)
            }
        }
    }
`;
